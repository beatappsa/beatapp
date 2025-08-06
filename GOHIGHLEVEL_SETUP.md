# GoHighLevel Custom Form Integration Setup Guide

This guide will help you set up the custom GoHighLevel form integration that replaces the embedded iframe with a fully customizable form while maintaining all lead capture functionality.

## 🚀 Features Implemented

### ✅ Custom Form Design
- **Full Design Control**: Complete customization of form appearance and layout
- **Arabic RTL Support**: Proper right-to-left text direction and layout
- **Responsive Design**: Works perfectly on all device sizes
- **Modern UI**: Beautiful gradient backgrounds, shadows, and animations
- **Form Validation**: Client-side validation with Arabic error messages
- **Loading States**: Visual feedback during form submission

### ✅ GoHighLevel API 2.0 Integration
- **Contact Creation**: Automatically creates contacts in your GoHighLevel account
- **Contact Updates**: Updates existing contacts if they submit again
- **Custom Fields**: Tracks form source, submission date, and custom data
- **Follow-up Notes**: Automatically adds detailed notes to contact records
- **Lead Attribution**: Proper tracking of lead sources and form locations
- **Error Handling**: Robust error handling with user-friendly messages

### ✅ Enhanced User Experience
- **Toast Notifications**: Real-time feedback for successful submissions and errors
- **Form Reset**: Automatically clears form after successful submission
- **Analytics Tracking**: Google Analytics event tracking for form submissions
- **Security**: Input validation and sanitization
- **Performance**: Optimized API calls and error recovery

## 📋 Setup Instructions

### Step 1: Get GoHighLevel API Credentials

1. **Login to GoHighLevel**
   - Go to your GoHighLevel agency or sub-account
   - Navigate to Settings → Integrations → API

2. **Create API Key**
   - Click "Create API Key"
   - Give it a descriptive name (e.g., "Website Contact Form")
   - Copy the generated API key

3. **Get Location ID**
   - In your GoHighLevel account, go to Settings → Company
   - Copy the Location ID from the URL or settings page

### Step 2: Configure Environment Variables

1. **Create `.env.local` file** in your project root:
   ```bash
   cp .env.example .env.local
   ```

2. **Add your GoHighLevel credentials**:
   ```env
   # GoHighLevel API Configuration
   GHL_API_KEY=your_actual_api_key_here
   GHL_LOCATION_ID=your_actual_location_id_here
   
   # Optional: Google Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Step 3: Configure Custom Fields (Optional)

To track additional data in GoHighLevel:

1. **Go to GoHighLevel Settings → Custom Fields**
2. **Create these custom fields** (or modify the API code to match your existing fields):
   - `message` (Text Area) - For form messages
   - `form_type` (Text) - Type of form submitted
   - `submission_date` (Date) - When form was submitted
   - `lead_source` (Text) - Source of the lead
   - `form_location` (Text) - Location of form on website
   - `language` (Text) - Language preference

### Step 4: Test the Integration

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to the Arabic landing page**:
   ```
   http://localhost:3001/ar/arabic-landing
   ```

3. **Test form submission**:
   - Fill out the form with test data
   - Submit the form
   - Check for success toast notification
   - Verify contact creation in GoHighLevel

### Step 5: Production Deployment

1. **Add environment variables to your hosting platform**:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables
   - **Other platforms**: Follow their environment variable setup guide

2. **Deploy your changes**:
   ```bash
   git push origin main
   ```

## 🔧 Customization Options

### Form Fields

To modify form fields, edit `/src/components/forms/GoHighLevelForm.tsx`:

```typescript
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;        // Optional field
  message: string;        // Optional field
  // Add your custom fields here
}
```

### Styling

The form uses Tailwind CSS classes. Key styling areas:
- **Form container**: Main form wrapper styling
- **Input fields**: Individual input styling and validation states
- **Submit button**: Button appearance and loading states
- **Error messages**: Validation error styling

### API Endpoint

The API endpoint is located at `/src/app/api/gohighlevel/contact/route.ts`. You can modify:
- **Validation rules**: Add custom validation logic
- **Custom fields mapping**: Map form data to GoHighLevel fields
- **Error handling**: Customize error responses
- **Follow-up actions**: Add additional actions after contact creation

## 🔍 Troubleshooting

### Common Issues

1. **"Server configuration error"**
   - Check that `GHL_API_KEY` and `GHL_LOCATION_ID` are set correctly
   - Verify environment variables are loaded (restart dev server)

2. **"Failed to create contact in GoHighLevel"**
   - Verify API key has correct permissions
   - Check that Location ID is correct
   - Ensure GoHighLevel account is active

3. **Form validation errors**
   - Check that required fields are filled
   - Verify email format is correct
   - Ensure phone number format is valid

4. **Toast notifications not showing**
   - Verify `react-hot-toast` is installed
   - Check that `Toaster` component is added to layout

### Debug Mode

To enable detailed logging:

1. **Check browser console** for client-side errors
2. **Check server logs** for API errors:
   ```bash
   npm run dev
   # Check terminal output for API errors
   ```

3. **Test API endpoint directly**:
   ```bash
   curl -X POST http://localhost:3001/api/gohighlevel/contact \
     -H "Content-Type: application/json" \
     -d '{"firstName":"Test","lastName":"User","email":"test@example.com","phone":"+1234567890"}'
   ```

## 📊 Analytics and Tracking

### Google Analytics Events

The form automatically tracks these events:
- `form_submit` - When form is successfully submitted
- Event category: `engagement`
- Event label: `Arabic Landing Contact Form`

### GoHighLevel Activity Tracking

Each form submission creates:
- **New Contact** (or updates existing)
- **Activity Note** with submission details
- **Custom Field Data** for lead attribution
- **Tags** for lead categorization

## 🔒 Security Considerations

### Data Protection
- All form data is validated before processing
- API keys are stored securely in environment variables
- No sensitive data is logged or exposed
- HTTPS required for production

### Rate Limiting
- Consider implementing rate limiting for production
- GoHighLevel API has built-in rate limits
- Monitor API usage in GoHighLevel dashboard

## 🚀 Next Steps

### Recommended Enhancements

1. **A/B Testing**: Test different form layouts and copy
2. **Multi-step Forms**: Break long forms into steps
3. **Conditional Fields**: Show/hide fields based on selections
4. **File Uploads**: Add support for file attachments
5. **Calendar Integration**: Add appointment booking
6. **SMS Notifications**: Send SMS confirmations
7. **Email Automation**: Trigger email sequences

### GoHighLevel Workflows

Set up automated workflows in GoHighLevel:
1. **Welcome Email**: Send immediate welcome email
2. **Follow-up Sequence**: Automated follow-up emails
3. **Lead Scoring**: Score leads based on form data
4. **Team Notifications**: Notify sales team of new leads
5. **CRM Integration**: Sync with other CRM systems

## 📞 Support

If you need help with the integration:
1. Check this documentation first
2. Review GoHighLevel API documentation
3. Test with simple form data
4. Check browser console and server logs
5. Verify environment variables are correct

---

**✅ Integration Complete!** Your custom GoHighLevel form is now ready to capture leads with full design control and proper API integration.