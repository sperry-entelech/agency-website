# Lead Logging & Scoring System (Temporary)

## Overview
This temporary version captures and scores leads from your Typeform while you set up Instantly. It provides:
- **Lead scoring** based on your existing n8n logic
- **Data logging** to Google Sheets or console
- **High-value lead notifications** 
- **Easy export** to Instantly when ready

## How It Works

1. **Typeform submission** → Webhook receives data
2. **Lead scoring** algorithm assigns points and tier
3. **Data logging** stores leads with scores and tiers
4. **Notifications** sent for high-value prospects (80+ points)
5. **Export ready** data for import to Instantly campaigns

## Scoring System

**Revenue Indicators (+40 points):**
- Dollar signs or numbers indicating business size
- Company descriptions with revenue hints

**Investment Level:**
- `$15,000+`: +50 points → **High Priority**
- `$7,500-$15,000`: +40 points
- `$2,500-$7,500`: +30 points  
- `Under $2,500`: +20 points
- `Need specifics`: +25 points

**Challenge Complexity (+15 points):**
- Detailed responses indicate serious prospects

**Tier Assignment:**
- **High (80+)**: Premium prospects → Immediate follow-up
- **Medium (50-79)**: Warm prospects → Standard nurture
- **Low (<50)**: Education prospects → Long-term nurture

## Data Output

Each lead is logged with:
- **Contact info**: Name, email, company
- **Business details**: Type, revenue indicators, challenges
- **Scoring data**: Points, tier assignment, timestamp
- **Campaign readiness**: "Ready for [Tier] campaign" notes

## Quick Setup

1. **Deploy the webhook** (already committed to your repo)
2. **Update Typeform webhook** URL to: `https://entelech.net/.netlify/functions/typeform-webhook`
3. **Monitor Netlify Functions logs** to see incoming leads
4. **Check console logs** for lead data (until Google Sheets setup)

## Google Sheets Integration (Optional)

To log directly to your existing Google Sheet:
1. **Create a Google Apps Script** webhook (I can help with this)
2. **Set `GOOGLE_SHEETS_WEBHOOK_URL`** in Netlify environment
3. **Leads auto-populate** in your existing sheet format

## Lead Notifications

High-value leads (80+ points) trigger console notifications with:
- Contact details and business info
- Investment level and challenges
- Recommended campaign assignment
- Ready-to-import format for Instantly

## Export to Instantly

When you're ready for Instantly:
1. **Export leads** from Google Sheets
2. **Import to appropriate campaigns** (High/Medium/Low)
3. **Switch webhook** to full Instantly integration
4. **Migrate existing sequences**

## Testing

Submit a test form with:
- **High investment** ($15,000+)  
- **Detailed challenge** (>100 chars)
- **Business size indicators**

Should score 80+ points and show as "High" tier.

## Migration Path

1. ✅ **Current**: Logging leads with scoring
2. 🔄 **Next**: Set up Instantly campaigns  
3. 🚀 **Future**: Direct API integration with instant lead assignment