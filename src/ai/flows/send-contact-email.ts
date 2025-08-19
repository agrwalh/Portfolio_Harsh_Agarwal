'use server';

/**
 * @fileOverview A Genkit flow for sending a contact email.
 *
 * - sendContactEmail - An async function that takes contact form data and sends an email.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 * - SendContactEmailOutput - The return type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SendContactEmailInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email of the person sending the message.'),
  message: z.string().describe('The message content.'),
});
export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;

const SendContactEmailOutputSchema = z.object({
  success: z.boolean(),
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
    // In a real application, you would integrate an email sending service here.
    // For example, using Nodemailer or a third-party API like SendGrid.
    console.log(`Simulating sending email:`);
    console.log(`From: ${input.name} <${input.email}>`);
    console.log(`Message: ${input.message}`);

    // Simulate a successful email send.
    return { success: true };
  }
);
