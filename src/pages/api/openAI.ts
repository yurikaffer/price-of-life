import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

type ResponseData = {
  text: string;
}

interface GenerateNextApiRequest extends NextApiRequest {
  body: {
    prompt: string;
  };
}

export default async function handler(
  req: GenerateNextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  if (!req.body.prompt) {
    return res.status(400).json({ text: 'Prompt é obrigatório.' });
  }

  const prompt = req.body.prompt;

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 250,
    });

    const choice = completion.choices[0] as any;
    const response = choice?.text || 'Desculpe, ocorreu algum problema.';
    console.log('choice: ', choice)

    res.status(200).json({ text: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ text: 'Falha ao gerar texto com a OpenAI.' });
  }
}
