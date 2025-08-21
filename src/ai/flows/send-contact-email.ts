'use server';

/**
 * @fileOverview A Genkit flow for sending a contact email using Nodemailer.
 *
 * - sendContactEmail - An async function that takes contact form data and sends an email.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 * - SendContactEmailOutput - The return type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const SendContactEmailInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  message: z.string().describe('The message content.'),
});
export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;

const SendContactEmailOutputSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
  // When using Ethereal fallback, provide a preview URL so developers can open it in the browser
  previewUrl: z.string().url().optional(),
  // List of recipients that the message was addressed to (for visibility)
  sentTo: z.array(z.string()).optional(),
});
export type SendContactEmailOutput = z.infer<typeof SendContactEmailOutputSchema>;

export async function sendContactEmail(input: SendContactEmailInput): Promise<SendContactEmailOutput> {
  return sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: SendContactEmailInputSchema,
    outputSchema: SendContactEmailOutputSchema,
  },
  async (input) => {
    const { name, email, message } = input;

    const isUnsetOrPlaceholder = (value?: string) => {
      if (!value) return true;
      const v = value.trim();
      if (v === '') return true;
      if (v.includes('__REPLACE__') || v.includes('__REPLACE')) return true;
      if (v.toLowerCase().startsWith('your_')) return true;
      return false;
    };

    const missingSmtp =
      isUnsetOrPlaceholder(process.env.EMAIL_HOST) ||
      isUnsetOrPlaceholder(process.env.EMAIL_PORT) ||
      isUnsetOrPlaceholder(process.env.EMAIL_USER) ||
      isUnsetOrPlaceholder(process.env.EMAIL_PASS) ||
      isUnsetOrPlaceholder(process.env.EMAIL_TO);

    let transporter: nodemailer.Transporter;
    let toAddress: string | undefined = process.env.EMAIL_TO;
    let fromAddress: string | undefined = process.env.EMAIL_USER;
    let isDevTransport = false;

    if (missingSmtp) {
      // Development fallback: ephemeral Ethereal SMTP inbox
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      toAddress = testAccount.user;
      fromAddress = testAccount.user;
      isDevTransport = true;
      console.log('[contact-email] Using Ethereal dev SMTP. Login:', testAccount.user);
    } else {
      // Create a transporter object using provided SMTP transport
      transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
    }

    const mailOptions = {
      from: `"${name}" <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: `New message from ${name} via your portfolio`,
      text: message,
      html: `
        <p>You have received a new message from your portfolio contact form.</p>
        <h3>Contact Details</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <h3>Message</h3>
        <p>${message}</p>`,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully, messageId:', info.messageId);
      let previewUrl: string | undefined;
      if (isDevTransport) {
        const url = nodemailer.getTestMessageUrl(info);
        previewUrl = typeof url === 'string' ? url : undefined;
        if (previewUrl) console.log('Preview URL:', previewUrl);
      } else {
        // On real SMTP, also send an acknowledgement to the sender so they receive an email too
        try {
          await transporter.sendMail({
            from: `Harsh Portfolio <${fromAddress}>`,
            to: email,
            subject: 'We received your message',
            text: `Hi ${name},\n\nThanks for reaching out! This is a quick confirmation that I received your message and will get back to you soon.\n\nYour message:\n${message}\n\n— Harsh`,
            html: `<p>Hi ${name},</p><p>Thanks for reaching out! This is a quick confirmation that I received your message and will get back to you soon.</p><p><strong>Your message</strong>:</p><p>${message}</p><p>— Harsh</p>`,
          });
        } catch (ackErr) {
          console.warn('Failed to send ack email to sender:', ackErr);
        }
      }
      const sentTo: string[] = [toAddress!, ...(isDevTransport ? [] : [email])];
      return { success: true, previewUrl, sentTo };
    } catch (error: any) {
      console.error('Error sending email:', error);
      return { success: false, error: error.message || 'Failed to send email.' };
    }
  }
);