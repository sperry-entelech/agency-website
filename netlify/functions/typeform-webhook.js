// Typeform to Instantly Lead Automation Webhook
// Receives Typeform submissions, scores leads, and adds to appropriate Instantly campaigns

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

    // Add to appropriate Instantly campaign
    const instantlyResult = await addToInstantly(leadData, tier);

    // Log to Google Sheets (optional - keeping your current logging)
    await logToSheets(leadData);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        tier: tier,
        score: score,
        instantly_id: instantlyResult.id
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

// Add lead to Instantly campaign based on tier
async function addToInstantly(leadData, tier) {
  const INSTANTLY_API_KEY = process.env.INSTANTLY_API_KEY;
  
  // Campaign IDs for each tier (you'll need to set these up in Instantly)
  const campaignIds = {
    'High': process.env.INSTANTLY_HIGH_CAMPAIGN_ID,
    'Medium': process.env.INSTANTLY_MEDIUM_CAMPAIGN_ID, 
    'Low': process.env.INSTANTLY_LOW_CAMPAIGN_ID
  };

  const campaignId = campaignIds[tier];

  const response = await fetch('https://api.instantly.ai/api/v1/leads/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${INSTANTLY_API_KEY}`
    },
    body: JSON.stringify({
      campaign_id: campaignId,
      leads: [leadData]
    })
  });

  if (!response.ok) {
    throw new Error(`Instantly API error: ${response.statusText}`);
  }

  return await response.json();
}

// Optional: Log to Google Sheets (keeping your existing logging)
async function logToSheets(leadData) {
  // Implementation for Google Sheets logging if you want to keep it
  // This would use the Google Sheets API
  console.log('Lead logged:', leadData);
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