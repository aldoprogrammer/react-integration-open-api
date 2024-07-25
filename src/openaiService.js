// src/openaiService.js

import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const openaiService = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  },
});

export const getChatResponse = async (prompt) => {
  const response = await openaiService.post('/chat/completions', {
    model: 'gpt-3.5-turbo',  // or another model you have access to
    messages: [{ role: 'user', content: prompt }],
  });
  return response.data;
};
