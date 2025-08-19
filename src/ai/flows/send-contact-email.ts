'use server';

/**
 * @fileOverview A Genkit flow for sending a contact email using Nodemailer.
 *
 * - sendContactEmail - An async function that takes contact form data and sends an email.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 * - SendContactEmailOutput - The return type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
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

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Email options
    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`, // sender address
        to: process.env.EMAIL_TO, // list of receivers
        replyTo: email,
        subject: `New message from ${name} via your portfolio`, // Subject line
        text: message, // plain text body
        html: `
        <p>You have received a new message from your portfolio contact form.</p>
        <h3>Contact Details</h3>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
        </ul>
        <h3>Message</h3>
        <p>${message}</p>`, // html body
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: 'Failed to send email.' };
    }
  }
);
