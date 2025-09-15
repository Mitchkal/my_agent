// console.log("Hello via Bun!");
import { generateText } from 'ai';
// Import google moduel from the ai-sdk package

import { google } from '@ai-sdk/google';

// Specify model to use for generating text and a prompt

const { text } = await generateText({
  model: google('models/gemini-2.5-flash'),
  prompt: 'What is an ai agent?',
});

console.log(text);
