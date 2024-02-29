export async function fetchGeneratedText(prompt: string) {
    try {
        const response = await fetch('/api/openAI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        if (!response.ok) {
            throw new Error('Erro ao requisitar para OpenAI');
        }

        const data = await response.json();
        return data.text;
    } catch (error) {
        console.error("Houve um problema com a requisição fetch:", error);
        return null;
    }
}
