'use server';

/**
 * @fileOverview An AI agent that summarizes work experience and education details.
 *
 * - summarizeExperience - A function that summarizes the experience details.
 * - SummarizeExperienceInput - The input type for the summarizeExperience function.
 * - SummarizeExperienceOutput - The return type for the summarizeExperience function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeExperienceInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The complete text of the resume to summarize.'),
});
export type SummarizeExperienceInput = z.infer<typeof SummarizeExperienceInputSchema>;

const SummarizeExperienceOutputSchema = z.object({
  summary: z.string().describe('A summary of the work experience and education.'),
});
export type SummarizeExperienceOutput = z.infer<typeof SummarizeExperienceOutputSchema>;

export async function summarizeExperience(input: SummarizeExperienceInput): Promise<SummarizeExperienceOutput> {
  return summarizeExperienceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeExperiencePrompt',
  input: {schema: SummarizeExperienceInputSchema},
  output: {schema: SummarizeExperienceOutputSchema},
  prompt: `You are an AI assistant designed to summarize a person\'s resume.

  Please provide a concise summary of their work experience and education from the following text:

  {{resumeText}}`,
});

const summarizeExperienceFlow = ai.defineFlow(
  {
    name: 'summarizeExperienceFlow',
    inputSchema: SummarizeExperienceInputSchema,
    outputSchema: SummarizeExperienceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
