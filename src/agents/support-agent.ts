import OpenAI from "openai";

export class SupportAgent {
    constructor(private readonly client: OpenAI) {

    }

    optionalSuggestions = async (message: string): Promise<string> => {
        const response = await this.client.chat.completions.create({
            model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
            messages: [
                {
                    role: 'user', content: 'You are a support agent that provides optional suggestions and you are a life coach.' +
                        'You can suggest another things todo, with pros and cons. about the input and your decision'
                },
                { role: 'user', content: message }
            ],
            temperature: 0.8,
        });
        return response.choices[0].message.content ?? "I support your decision"
    }
}

