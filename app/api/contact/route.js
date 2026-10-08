import { NextResponse } from 'next/navigation';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please provide your name, email, and message.' },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER || 'finallykabilan@gmail.com';
    const smtpPass = process.env.SMTP_PASSWORD || 'dbglrbmigcobgkyb';
    const smtpFrom = process.env.SMTP_FROM || 'finallykabilan@gmail.com';
    const recipientEmails = process.env.ADMIN_EMAIL || 'finallykabilan@gmail.com,contact@dudez.in';

    // Create Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // 1. Email to Business / Admin with full lead details
    const adminMailOptions = {
      from: `"Dudez Website Enquiry" <${smtpFrom}>`,
      to: recipientEmails,
      replyTo: `"${name}" <${email}>`,
      subject: `[New Lead] ${name} - ${projectType || 'General Enquiry'} (Dudez)`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #2563eb; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #0f172a; margin: 0; font-size: 20px;">New Project Enquiry Received</h2>
            <p style="color: #64748b; margin: 4px 0 0 0; font-size: 14px;">Source: https://dudez.in Contact Form</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; width: 140px; font-weight: 600;">Client Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #2563eb;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Company:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${company || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;">Project Type:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${projectType || 'General'}</td>
            </tr>
          </table>

          <div style="margin-bottom: 24px;">
            <div style="font-weight: 600; color: #0f172a; margin-bottom: 8px;">Project Requirements / Message:</div>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="border-top: 1px solid #e2e8f0; padding-top: 14px; font-size: 12px; color: #94a3b8; text-align: center;">
            You can reply directly to this email to contact <strong>${name}</strong> (${email}).
          </div>
        </div>
      `,
    };

    // 2. Automated Confirmation / Reply Email to the Client
    const clientReplyOptions = {
      from: `"Dudez | Software Development" <${smtpFrom}>`,
      to: email,
      replyTo: 'contact@dudez.in',
      subject: `Thank you for contacting Dudez — We received your project enquiry`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #2563eb; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #0f172a; margin: 0; font-size: 20px;">Thank You for Reaching Out to Dudez</h2>
            <p style="color: #64748b; margin: 4px 0 0 0; font-size: 14px;">Software Development & IT Services &bull; Chennai, India</p>
          </div>

          <p style="color: #334155; font-size: 15px; line-height: 1.6;">
            Hello <strong>${name}</strong>,
          </p>

          <p style="color: #334155; font-size: 14px; line-height: 1.6;">
            Thank you for considering Dudez for your technology requirements. We have successfully received your project enquiry regarding <strong>${projectType || 'Software Development'}</strong>.
          </p>

          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin: 20px 0;">
            <h4 style="margin: 0 0 10px 0; color: #0f172a; font-size: 14px;">Summary of Your Submission:</h4>
            <p style="margin: 4px 0; color: #475569; font-size: 13px;"><strong>Project Type:</strong> ${projectType || 'General'}</p>
            ${company ? `<p style="margin: 4px 0; color: #475569; font-size: 13px;"><strong>Company:</strong> ${company}</p>` : ''}
            <p style="margin: 4px 0; color: #475569; font-size: 13px;"><strong>Message:</strong> ${message}</p>
          </div>

          <p style="color: #334155; font-size: 14px; line-height: 1.6;">
            Our engineering team will review your specifications and contact you within <strong>one business day</strong> to discuss the technical approach, architecture, and next steps.
          </p>

          <p style="color: #334155; font-size: 14px; line-height: 1.6;">
            If you need immediate assistance or wish to provide additional documentation, you can reply directly to this email or reach us on WhatsApp/Phone at <strong>+91 9363519020</strong>.
          </p>

          <div style="border-top: 1px solid #e2e8f0; margin-top: 28px; padding-top: 18px; font-size: 13px; color: #64748b;">
            <p style="margin: 0 0 4px 0; font-weight: 600; color: #0f172a;">Dudez</p>
            <p style="margin: 0 0 4px 0;">Software Development & IT Services</p>
            <p style="margin: 0 0 4px 0;">Chennai, Tamil Nadu, India</p>
            <p style="margin: 0 0 4px 0;">Website: <a href="https://dudez.in" style="color: #2563eb;">https://dudez.in</a> | Email: <a href="mailto:contact@dudez.in" style="color: #2563eb;">contact@dudez.in</a></p>
          </div>
        </div>
      `,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientReplyOptions),
    ]);

    return NextResponse.json({
      success: true,
      message: 'Your enquiry has been sent successfully. A confirmation email has been dispatched to your address.',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to send enquiry. Please try again or email us directly at contact@dudez.in',
      },
      { status: 500 }
    );
  }
}
