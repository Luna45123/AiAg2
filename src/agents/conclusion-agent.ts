import OpenAI from "openai";

export class ConclusionAgent {
    constructor(private readonly client: OpenAI) {
        
    }

    conclude = async (weatherResponse: string,optionalSuggestions:string): Promise<string> => {
        const response = await this.client.chat.completions.create({
            model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
            messages: [
                {
                    role: 'system', content: 'You are a decision critic. Review both of suggestions and pick the best one. Justify your reasoning.'
                },
                { role: 'user', content: `the first decistion is : ${weatherResponse}` }
                , { role: 'user', content: `the second decision is : ${optionalSuggestions}` }
            ],
            temperature: 0.8,
        });
        return response.choices[0].message.content ?? "I support your decision"
    }
}