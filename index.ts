import OpenAI from "openai"

import dotenv from 'dotenv'
import { WeatherAgent } from "./src/agents/weather-agent"
import { SupportAgent } from "./src/agents/support-agent"
import { ConclusionAgent } from "./src/agents/conclusion-agent"
import { buildHtmlFileAndOpen } from "./src/utils/html"
import { SDAgent } from "./src/agents/sd-agent"




dotenv.config()

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const run = async (userPrompt:string) => {
    console.log('Thinking...')
    const SD_Agent = new SDAgent(client)
    const SDResponse = await SD_Agent.askQuestion(userPrompt)
    console.log(SDResponse)

    // console.log('suggesting optional things to do...')
    // const supportAgent = new SupportAgent(client)
    // const supportResponse = await supportAgent.optionalSuggestions(weatherResponse)
    // console.log(supportResponse)

    // console.log('Concluding the decision...')
    // const conclusionAgent = new ConclusionAgent(client)
    // const conclusionResponse = await conclusionAgent.conclude(weatherResponse, supportResponse)
    // buildHtmlFileAndOpen(weatherResponse, supportResponse, conclusionResponse);

    // const sdAgent = new SDAgent(client);
    // const sdResponse = await sdAgent.Sd(userPrompt)
    // console.log(sdResponse)


}


run("ช่วยสร้างภาพอนิเมะ reimu hakurei ขนาดหน้าอกเล็กภาพกว้าง 512 สูง 512").then(() => {
    console.log("---------------------------------------------------------------------------------")
})
