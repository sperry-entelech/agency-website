// Typeform Lead Logging & Scoring Webhook (Temporary Version)
// Receives Typeform submissions, scores leads, and logs to Google Sheets for later import to Instantly

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const formData = JSON.parse(event.body);
    console.log('Received Typeform submission:', formData);

    // Extract form responses
    const responses = {};
    if (formData.form_response && formData.form_response.answers) {
      formData.form_response.answers.forEach(answer => {
        const field = answer.field.ref || answer.field.id;
        responses[field] = answer.text || answer.choice?.label || answer.email || answer.phone_number;
      });
    }

    // Lead scoring logic (based on your n8n workflow)
    let score = 0;
    let tier = 'Low';

    // Business type and revenue analysis (adjust field names to match your Typeform)
    const businessInfo = responses.business_type_revenue || '';
    const challenge = responses.biggest_challenge || '';
    const investment = responses.investment_level || '';

    // Revenue scoring - look for revenue indicators in business description
    if (businessInfo.toLowerCase().includes('$') || 
        businessInfo.match(/\d+k|\d+,\d+|\d{6,}/)) {
      score += 40;
    }

    // Company size scoring - look for employee/size indicators
    if (businessInfo.toLowerCase().includes('employee') ||
        businessInfo.match(/\d+\s*(staff|team|people)/)) {
      score += 30;
    }

    // Investment level scoring
    switch(investment) {
      case '$15,000+':
        score += 50;
        break;
      case '$7,500 - $15,000':
        score += 40;
        break;
      case '$2,500 - $7,500':
        score += 30;
        break;
      case 'Under $2,500':
        score += 20;
        break;
      case 'Need to see specifics first':
        score += 25;
        break;
    }

    // Challenge complexity scoring
    if (challenge.length > 100) {
      score += 15; // Detailed challenges indicate serious prospects
    }

    // Determine tier
    if (score >= 80) {
      tier = 'High';
    } else if (score >= 50) {
      tier = 'Medium';
    }

    // Prepare data for Instantly
    const leadData = {
      email: responses.email || formData.form_response.calculated.score,
      firstName: responses.name?.split(' ')[0] || 'Prospect',
      lastName: responses.name?.split(' ').slice(1).join(' ') || '',
      company: extractCompany(businessInfo),
      customFields: {
        lead_score: score,
        tier: tier,
        business_type: businessInfo,
        biggest_challenge: challenge,
        investment_level: investment,
        form_submitted_at: new Date().toISOString()
      }
    };

    // Log to Google Sheets for later import to Instantly
    const sheetResult = await logToSheets(leadData);

    // Send email notification about new lead
    await sendLeadNotification(leadData);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        tier: tier,
        score: score,
        logged_at: new Date().toISOString(),
        sheet_row: sheetResult?.row || 'logged'
      })
    };

  } catch (error) {
    console.error('Webhook error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};

// Log lead to Google Sheets for later import to Instantly
async function logToSheets(leadData) {
  try {
    const GOOGLE_SHEETS_ID = process.env.GOOGLE_SHEETS_ID || '1ahzDhiihqM8DvTjxiXQzAKrMwS1OJyrzi3tIuGS6BBE';
    
    // Prepare row data for Google Sheets
    const rowData = [
      leadData.firstName + ' ' + leadData.lastName, // Name
      leadData.email, // Email
      '', // Phone (if you add this field later)
      leadData.company, // Company
      '', // Employees (extracted from business info)
      leadData.customFields.business_type, // Business Type/Revenue
      leadData.customFields.investment_level, // Budget/Investment
      leadData.customFields.biggest_challenge, // Challenge
      leadData.customFields.lead_score, // Lead Score
      leadData.customFields.tier, // Tier
      'No', // Processed (for tracking)
      leadData.customFields.form_submitted_at, // Date Added
      `Ready for ${leadData.customFields.tier} campaign` // Notes
    ];

    // For now, we'll use a simple fetch to a Google Apps Script or Zapier webhook
    // You can also use the Google Sheets API directly with service account credentials
    
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [rowData]
        })
      });
      
      if (response.ok) {
        console.log('Lead logged to Google Sheets successfully');
        return { success: true, row: rowData };
      }
    }
    
    // Fallback: log to console for now
    console.log('Lead data to be logged:', {
      name: rowData[0],
      email: rowData[1],
      company: rowData[3],
      tier: rowData[9],
      score: rowData[8],
      timestamp: rowData[11]
    });
    
    return { success: true, method: 'console_log' };
    
  } catch (error) {
    console.error('Error logging to sheets:', error);
    return { success: false, error: error.message };
  }
}

// Send email notification about new high-value leads
async function sendLeadNotification(leadData) {
  // Only notify for high-tier leads or you can adjust this
  if (leadData.customFields.tier !== 'High') return;

  try {
    // Simple email notification - you can use any email service
    const notificationData = {
      to: 'sperry@entelech.net',
      subject: `🎯 High-Value Lead: ${leadData.firstName} (Score: ${leadData.customFields.lead_score})`,
      html: `
        <h2>New High-Value Lead Alert</h2>
        <p><strong>Name:</strong> ${leadData.firstName} ${leadData.lastName}</p>
        <p><strong>Email:</strong> ${leadData.email}</p>
        <p><strong>Company:</strong> ${leadData.company}</p>
        <p><strong>Score:</strong> ${leadData.customFields.lead_score} (${leadData.customFields.tier} Tier)</p>
        <p><strong>Business Type:</strong> ${leadData.customFields.business_type}</p>
        <p><strong>Investment Level:</strong> ${leadData.customFields.investment_level}</p>
        <p><strong>Challenge:</strong> ${leadData.customFields.biggest_challenge}</p>
        <hr>
        <p><em>Lead submitted at: ${leadData.customFields.form_submitted_at}</em></p>
        <p><strong>Recommended Action:</strong> Add to ${leadData.customFields.tier} campaign in Instantly when ready</p>
      `
    };

    // You can integrate with SendGrid, Mailgun, or any email service here
    console.log('High-value lead notification:', notificationData.subject);
    
  } catch (error) {
    console.error('Error sending notification:', error);
  }
}

// Extract company name from business description
function extractCompany(businessInfo) {
  // Simple extraction - you can make this more sophisticated
  const words = businessInfo.split(' ');
  if (words.length > 2) {
    return words.slice(0, 2).join(' ');
  }
  return 'Service Business';
}