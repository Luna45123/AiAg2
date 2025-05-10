import OpenAI from "openai"
import dotenv from 'dotenv'
import { SDAgent } from "./src/agents/sd-agent"

dotenv.config()

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const run = async (userPrompt: string) => {
    console.log('Thinking...')
    const SD_Agent = new SDAgent(client)
    const SDResponse = await SD_Agent.askQuestion(userPrompt)
    console.log(SDResponse)
}

// ดึง input ที่พิมพ์ตามหลังไฟล์ script ใน CLI
const userInput = process.argv.slice(2).join(" ");

if (!userInput) {
    console.error("❗ กรุณาใส่ข้อความในคำสั่ง เช่น: node index.js สร้างภาพสาวหูแมว");
    process.exit(1);
}

run(userInput).then(() => {
    console.log("---------------------------------------------------------------------------------")
})
