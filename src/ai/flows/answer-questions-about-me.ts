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
  const configuredKey = (process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || '').trim();
  const isPlaceholder =
    configuredKey === '' ||
    configuredKey.includes('__REPLACE__') ||
    configuredKey.includes('__REPLACE') ||
    configuredKey.toLowerCase().startsWith('your_') ||
    configuredKey.length < 20; // simple heuristic to avoid obvious invalid keys

  if (isPlaceholder) {
    // Fallback local answer when Gemini API key is not configured
    const q = input.question.toLowerCase();
    const facts = {
      experience: "Web Developer Intern at Prodigy Infotech",
      education: "ABES Engineering College",
      projects: "FlashKart, MediChat, MovieHub",
      skills:
        "Frontend: React, Next.js, TypeScript, Tailwind CSS. Backend: Node.js, Express.js, Firebase, MongoDB, MySQL. Other: DSA, OOP, Git/GitHub, REST APIs, Genkit, ML, Vercel/Netlify/AWS, OAuth/JWT.",
      aiProjects:
        "Built MediChat, an AI-powered healthcare and pharmacy assistant using Genkit and Gemini 2.0 Flash. Designed typed flows for medical Q&A, prescription and pharmacy support, patient-friendly health information summarization, and secure contact/email handling.",
    };

    let answer = "I can answer questions about Harsh's skills, projects, and experience. ";
    if (q.includes("experience") || q.includes("work") || q.includes("intern")) {
      answer = `Harsh's experience: ${facts.experience}.`;
    } else if (q.includes("education") || q.includes("college") || q.includes("study")) {
      answer = `Harsh studied at ${facts.education}.`;
    } else if (q.includes("project") || q.includes("flashkart") || q.includes("medichat") || q.includes("moviehub")) {
      answer = `Key projects: ${facts.projects}.`;
    } else if (q.includes("ai") || q.includes("assistant") || q.includes("genkit") || q.includes("gemini")) {
      answer = `AI projects: ${facts.aiProjects}`;
    } else if (q.includes("skill") || q.includes("tech") || q.includes("stack")) {
      answer = `Skills: ${facts.skills}`;
    } else if (q.includes("who") || q.includes("about")) {
      answer = `Harsh Agarwal is a developer with experience as ${facts.experience}. Education: ${facts.education}. Projects: ${facts.projects}. AI: ${facts.aiProjects} Skills: ${facts.skills}`;
    } else {
      answer += `Here are highlights — Experience: ${facts.experience}. Education: ${facts.education}. Projects: ${facts.projects}. AI: ${facts.aiProjects} Skills: ${facts.skills}`;
    }

    return {answer};
  }

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
  - AI Projects: Portfolio AI Assistant built with Genkit + Gemini 2.0 Flash; server actions/flows for Q&A, experience summarization, and contact email; structured prompts and typed schemas with zod.
  - Skills:
    - Frontend Development: React, Next.js, JavaScript (ES6+), TypeScript, HTML, CSS, Tailwind CSS, Bootstrap
    - Backend Development: Node.js, Express.js, Firebase, MongoDB, MySQL
    - Programming & Concepts: Data Structures & Algorithms, OOPS Concepts, Git & GitHub, REST APIs
    - AI/ML: Genkit, Machine Learning
    - Tools & Deployment: Vercel, Netlify, AWS, Authentication (OAuth, JWT)
  - Currently Working On:
    - Enhancing his portfolio with an on-site AI assistant and Q&A flows
    - Iterating on MediChat and MovieHub features and UI polish
    - Practicing DSA and improving Next.js performance and accessibility

  Question: {{{question}}}
  Answer: 
  - Keep it concise and specific to the question.
  - If asked about AI projects, mention Genkit, Gemini, and the implemented flows.
  - If asked about tech stack, list key tools and frameworks.
  - If asked what he's working on, summarize the "Currently Working On" items.
  `,
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
