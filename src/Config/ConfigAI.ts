const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Substitua pelo seu método de gerenciamento de chaves de API
});
export const openAI = new OpenAIApi(configuration);