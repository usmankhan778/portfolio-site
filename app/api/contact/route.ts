import { NextRequest, NextResponse } from 'next/server'

interface ContactData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // TODO: Send email using Resend
    // For now, just log the data
    console.log('Contact form submission:', data)

    // You can integrate with Resend here:
    // const email = await resend.emails.send({
    //   from: "onboarding@resend.dev",
    //   to: "hello@example.com",
    //   subject: `New message from ${data.name}: ${data.subject}`,
    //   html: `
    //     <p><strong>From:</strong> ${data.name} (${data.email})</p>
    //     <p><strong>Subject:</strong> ${data.subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${data.message}</p>
    //   `,
    // })

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
