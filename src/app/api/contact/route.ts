import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/config/site";

interface ContactRequestBody {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  details: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, phone, service, details } = body;

    // Validate inputs
    if (!name?.trim() || !email?.trim() || !details?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Parse multiple recipient emails (e.g. primary and secondary email)
    const envEmails =
      process.env.CONTACT_RECEIVER_EMAILS ||
      process.env.CONTACT_RECEIVER_EMAIL;
    const secondaryEmail = process.env.CONTACT_RECEIVER_EMAIL_2;

    const defaultRecipients = ["pbithub0@gmail.com", "rishabk227@gmail.com"];
    const recipientList: string[] = [];

    if (envEmails) {
      recipientList.push(
        ...envEmails
          .split(",")
          .map((e) => e.trim())
          .filter(Boolean),
      );
    } else {
      recipientList.push(...defaultRecipients);
    }

    if (secondaryEmail && !recipientList.includes(secondaryEmail.trim())) {
      recipientList.push(secondaryEmail.trim());
    }

    // Ensure recipient list has valid unique emails
    const finalRecipients = Array.from(new Set(recipientList));

    const smtpUser =
      process.env.SMTP_USER ||
      process.env.GMAIL_USER ||
      process.env.EMAIL_USER ||
      "pbithub0@gmail.com";
    const smtpPass =
      process.env.SMTP_PASS ||
      process.env.GMAIL_APP_PASSWORD ||
      process.env.EMAIL_PASSWORD ||
      "scpjpatgirrcoxhx";
    const smtpHost =
      process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);

    let emailSent = false;
    let mailError: string | null = null;

    const cleanPass = smtpPass ? smtpPass.replace(/\s+/g, "") : "";

    if (smtpUser && cleanPass) {
      try {
        const isGmail = smtpUser.endsWith("@gmail.com") || smtpHost.includes("gmail");
        const transporter = isGmail
          ? nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: smtpUser.trim(),
                pass: cleanPass,
              },
            })
          : nodemailer.createTransport({
              host: smtpHost,
              port: smtpPort,
              secure: smtpPort === 465,
              auth: {
                user: smtpUser.trim(),
                pass: cleanPass,
              },
            });

        const mailOptions = {
          from: `"PB IT HUB Inquiry" <${smtpUser}>`,
          to: finalRecipients,
          replyTo: email,
          subject: `New Project Inquiry from ${name.trim()} (${service || "General"})`,
          text: `
New Project Inquiry Received:

Name: ${name.trim()}
Email: ${email.trim()}
Phone: ${phone?.trim() || "Not provided"}
Service Requested: ${service || "General"}

Project Details:
${details.trim()}

-----------------------------------------
Sent from PB IT HUB Website Contact Form
          `.trim(),
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; rounded: 12px; background-color: #ffffff;">
              <div style="border-bottom: 2px solid #2563eb; padding-bottom: 16px; margin-bottom: 20px;">
                <h2 style="color: #0f172a; margin: 0 0 4px 0; font-size: 20px;">New Project Inquiry</h2>
                <p style="color: #64748b; margin: 0; font-size: 13px;">Received via PB IT HUB Website</p>
              </div>

              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; width: 140px;">Client Name:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 500;">${name.trim()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Work Email:</td>
                  <td style="padding: 8px 0; color: #2563eb; font-size: 14px;"><a href="mailto:${email.trim()}" style="color: #2563eb; text-decoration: none;">${email.trim()}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Phone:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${phone?.trim() || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Service Requested:</td>
                  <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${service || "General"}</td>
                </tr>
              </table>

              <div style="background-color: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 6px; margin-bottom: 24px;">
                <h3 style="color: #0f172a; margin: 0 0 8px 0; font-size: 14px;">Project Details / Brief:</h3>
                <p style="color: #334155; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${details.trim()}</p>
              </div>

              <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; text-align: center;">
                <a href="mailto:${email.trim()}?subject=Re:%20PB%20IT%20HUB%20Project%20Inquiry" style="background-color: #2563eb; color: #ffffff; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: 600; display: inline-block;">Reply to Client</a>
              </div>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        emailSent = true;
      } catch (err: unknown) {
        mailError = err instanceof Error ? err.message : "SMTP transport error";
        console.error("Nodemailer send error:", err);
      }
    }

    if (!emailSent) {
      return NextResponse.json(
        {
          error:
            mailError ||
            "Failed to send email. Please ensure SMTP credentials are configured.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      emailSent: true,
      message: "Your project inquiry has been emailed successfully!",
    });
  } catch (error: unknown) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again or reach out directly." },
      { status: 500 },
    );
  }
}
