import { specifications } from '../pages/CarSpecs';

const API_URL = "https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat-hf";

export const getChatResponse = async (message: string): Promise<string> => {
  try {
    // Create a context with car specifications
    const specsContext = specifications
      .map(cat => `${cat.category}:\n${cat.specs.map(s => `- ${s.label}: ${s.value}`).join('\n')}`)
      .join('\n\n');

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: `<s>[INST] <<SYS>>
You are an AI assistant for the 2022 Volkswagen Virtus GT. You have access to the following specifications:

${specsContext}

Provide accurate, helpful, and concise responses about the car's features and specifications. If asked about something not in the specifications, politely indicate that you don't have that specific information.
<</SYS>>

${message} [/INST]`,
        parameters: {
          max_new_tokens: 250,
          temperature: 0.7,
          top_p: 0.95,
          return_full_text: false,
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data[0].generated_text;
  } catch (error) {
    console.error('Chat API error:', error);
    throw new Error('Failed to get response from chat service');
  }
};