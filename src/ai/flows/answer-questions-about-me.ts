'use server';
/**
 * @fileOverview This file defines a Genkit flow for answering questions about Harsh Agarwal's background, projects, and skills.
 *
 * - answerQuestionsAboutMe - An async function that takes a question as input and returns an answer.
 * - AnswerQuestionsAboutMeInput - The input type for the answerQuestionsAboutMe function.
 * - AnswerQuestionsAboutMeOutput - The return type for the answerQuestionsAboutMe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerQuestionsAboutMeInputSchema = z.object({
  question: z.string().describe('The question to ask about Harsh Agarwal.'),
});
export type AnswerQuestionsAboutMeInput = z.infer<typeof AnswerQuestionsAboutMeInputSchema>;

const AnswerQuestionsAboutMeOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about Harsh Agarwal.'),
});
export type AnswerQuestionsAboutMeOutput = z.infer<typeof AnswerQuestionsAboutMeOutputSchema>;

export async function answerQuestionsAboutMe(input: AnswerQuestionsAboutMeInput): Promise<AnswerQuestionsAboutMeOutput> {
  return answerQuestionsAboutMeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerQuestionsAboutMePrompt',
  input: {schema: AnswerQuestionsAboutMeInputSchema},
  output: {schema: AnswerQuestionsAboutMeOutputSchema},
  prompt: `You are a helpful AI assistant that provides information about Harsh Agarwal.
  Use the following information about Harsh Agarwal to answer the question.
  If the question is not about Harsh Agarwal, or you cannot answer the question using the information below, respond that you cannot answer the question.

  Here is information about Harsh Agarwal:
  - Work Experience: Web Developer Intern at Prodigy Infotech
  - Education: ABES Engineering College
  - Projects: FlashKart, MediChat, MovieHub
  - Skills:
    - Frontend Development: React, Next.js, JavaScript (ES6+), TypeScript, HTML, CSS, Tailwind CSS, Bootstrap
    - Backend Development: Node.js, Express.js, Firebase, MongoDB, MySQL
    - Programming & Concepts: Data Structures & Algorithms, OOPS Concepts, Git & GitHub, REST APIs
    - AI/ML: Genkit, Machine Learning
    - Tools & Deployment: Vercel, Netlify, AWS, Authentication (OAuth, JWT)

  Question: {{{question}}}
  Answer: `,
});

const answerQuestionsAboutMeFlow = ai.defineFlow(
  {
    name: 'answerQuestionsAboutMeFlow',
    inputSchema: AnswerQuestionsAboutMeInputSchema,
    outputSchema: AnswerQuestionsAboutMeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
