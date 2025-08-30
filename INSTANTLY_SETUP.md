# Native Instantly Lead Automation Setup

## Overview
This native automation replaces your n8n workflow with a Netlify Function that:
1. Receives Typeform submissions via webhook
2. Scores leads based on business size, budget, and complexity
3. Assigns leads to appropriate Instantly campaigns
4. Logs data for tracking and analysis

## Setup Steps

### 1. Instantly Configuration

1. **Get your API key** from Instantly dashboard
2. **Create 3 campaigns** for different lead tiers:
   - **High-Intent Campaign**: For qualified prospects (score 80+)
   - **Medium-Intent Campaign**: For warm prospects (score 50-79)  
   - **Low-Intent Campaign**: For nurture prospects (score <50)
3. **Note the Campaign IDs** from each campaign URL

### 2. Environment Variables

In your Netlify dashboard, add these environment variables:
- `INSTANTLY_API_KEY` = Your Instantly API key
- `INSTANTLY_HIGH_CAMPAIGN_ID` = High-intent campaign ID
- `INSTANTLY_MEDIUM_CAMPAIGN_ID` = Medium-intent campaign ID  
- `INSTANTLY_LOW_CAMPAIGN_ID` = Low-intent campaign ID

### 3. Typeform Webhook Setup

1. Go to your Typeform: https://form.typeform.com/to/xJOZsJGG
2. Navigate to **Connect** → **Webhooks**
3. Add webhook URL: `https://entelech.net/.netlify/functions/typeform-webhook`
4. Test the webhook to ensure it's working

### 4. Lead Scoring Logic

The automation scores leads based on:

**Revenue Indicators (+40 points):**
- Dollar signs or revenue numbers in business description
- Company size indicators

**Investment Level:**
- $15,000+: +50 points
- $7,500-$15,000: +40 points  
- $2,500-$7,500: +30 points
- Under $2,500: +20 points
- Need specifics: +25 points

**Challenge Complexity (+15 points):**
- Detailed responses (>100 characters) indicate serious prospects

**Tier Assignment:**
- **High (80+ points)**: Ready-to-buy prospects → Premium campaign
- **Medium (50-79 points)**: Warm prospects → Standard nurture  
- **Low (<50 points)**: Early-stage prospects → Educational sequence

## Testing

1. **Submit test form** with different scenarios
2. **Check Netlify Functions logs** for debugging
3. **Verify leads appear** in correct Instantly campaigns
4. **Monitor campaign performance** in Instantly dashboard

## Customization

You can adjust scoring rules in the webhook function by modifying:
- Point values for different criteria
- Tier thresholds (currently 80 and 50)
- Custom fields sent to Instantly
- Lead data processing logic

## Migration from n8n

Once this is working:
1. **Disable your n8n workflow** 
2. **Update Typeform webhook** to use new endpoint
3. **Monitor for 24-48 hours** to ensure smooth operation
4. **Archive n8n workflow** as backup

## Support

The webhook includes error logging and will return detailed error messages for troubleshooting. Check Netlify Functions logs if leads aren't appearing in Instantly campaigns.