import { NextRequest, NextResponse } from 'next/server';

interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
  source?: string;
  formType?: string;
  timestamp?: string;
  customFields?: Record<string, any>;
}

interface GoHighLevelContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName?: string;
  source?: string;
  tags?: string[];
  customFields?: Array<{
    id: string;
    field_value: string;
  }>;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactData = await request.json();
    
    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields: firstName, lastName, email, phone' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Get GoHighLevel credentials from environment
    const ghlApiKey = process.env.GHL_API_KEY;
    const ghlLocationId = process.env.GHL_LOCATION_ID;
    
    if (!ghlApiKey || !ghlLocationId) {
      console.error('Missing GoHighLevel credentials');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }
    
    // Prepare contact data for GoHighLevel API
    const contactData: GoHighLevelContact = {
      firstName: body.firstName.trim(),
      lastName: body.lastName.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      source: body.source || 'Website Form',
      tags: ['Arabic Landing Page', 'Website Lead']
    };
    
    // Add company name if provided
    if (body.company?.trim()) {
      contactData.companyName = body.company.trim();
    }
    
    // Add custom fields
    const customFields = [];
    
    if (body.message?.trim()) {
      customFields.push({
        id: 'message', // This should match your GHL custom field ID
        field_value: body.message.trim()
      });
    }
    
    if (body.formType) {
      customFields.push({
        id: 'form_type',
        field_value: body.formType
      });
    }
    
    if (body.timestamp) {
      customFields.push({
        id: 'submission_date',
        field_value: body.timestamp
      });
    }
    
    // Add any additional custom fields
    if (body.customFields) {
      Object.entries(body.customFields).forEach(([key, value]) => {
        customFields.push({
          id: key,
          field_value: String(value)
        });
      });
    }
    
    if (customFields.length > 0) {
      contactData.customFields = customFields;
    }
    
    // Make API call to GoHighLevel
    const ghlResponse = await fetch(`https://services.leadconnectorhq.com/contacts/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ghlApiKey}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28'
      },
      body: JSON.stringify({
        ...contactData,
        locationId: ghlLocationId
      })
    });
    
    const ghlData = await ghlResponse.json();
    
    if (!ghlResponse.ok) {
      console.error('GoHighLevel API Error:', ghlData);
      
      // Handle specific GHL errors
      if (ghlResponse.status === 422 && ghlData.message?.includes('already exists')) {
        // Contact already exists, try to update instead
        return await updateExistingContact(contactData, ghlApiKey, ghlLocationId, body);
      }
      
      return NextResponse.json(
        { 
          error: 'Failed to create contact in GoHighLevel',
          details: ghlData.message || 'Unknown error'
        },
        { status: ghlResponse.status }
      );
    }
    
    // Log successful creation
    console.log('Contact created successfully:', {
      contactId: ghlData.contact?.id,
      email: body.email,
      source: body.source
    });
    
    // Optional: Create a follow-up task or note
    if (ghlData.contact?.id) {
      await createFollowUpNote(ghlData.contact.id, body, ghlApiKey);
    }
    
    return NextResponse.json({
      success: true,
      message: 'Contact created successfully',
      contactId: ghlData.contact?.id
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper function to update existing contact
async function updateExistingContact(
  contactData: GoHighLevelContact,
  apiKey: string,
  locationId: string,
  originalData: ContactData
) {
  try {
    // First, search for the existing contact
    const searchResponse = await fetch(
      `https://services.leadconnectorhq.com/contacts/search/duplicate?locationId=${locationId}&email=${contactData.email}`,
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Version': '2021-07-28'
        }
      }
    );
    
    const searchData = await searchResponse.json();
    
    if (searchData.contact?.id) {
      // Update the existing contact
      const updateResponse = await fetch(
        `https://services.leadconnectorhq.com/contacts/${searchData.contact.id}`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'Version': '2021-07-28'
          },
          body: JSON.stringify(contactData)
        }
      );
      
      if (updateResponse.ok) {
        // Create a follow-up note for the updated contact
        await createFollowUpNote(searchData.contact.id, originalData, apiKey);
        
        return NextResponse.json({
          success: true,
          message: 'Contact updated successfully',
          contactId: searchData.contact.id,
          updated: true
        });
      }
    }
    
    return NextResponse.json(
      { error: 'Contact exists but could not be updated' },
      { status: 409 }
    );
    
  } catch (error) {
    console.error('Error updating existing contact:', error);
    return NextResponse.json(
      { error: 'Failed to update existing contact' },
      { status: 500 }
    );
  }
}

// Helper function to create a follow-up note
async function createFollowUpNote(
  contactId: string,
  data: ContactData,
  apiKey: string
) {
  try {
    const noteContent = `New form submission from Arabic Landing Page\n\nDetails:\n- Name: ${data.firstName} ${data.lastName}\n- Email: ${data.email}\n- Phone: ${data.phone}${data.company ? `\n- Company: ${data.company}` : ''}${data.message ? `\n- Message: ${data.message}` : ''}\n- Source: ${data.source}\n- Submitted: ${data.timestamp || new Date().toISOString()}`;
    
    await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28'
      },
      body: JSON.stringify({
        body: noteContent,
        userId: 'system' // or your user ID
      })
    });
  } catch (error) {
    console.error('Error creating follow-up note:', error);
    // Don't throw error as this is optional
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}