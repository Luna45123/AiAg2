import axios from 'axios'
const SD_WEBUI_URL = process.env.SD_WEBUI_URL!

export async function generateImage(prompt: string): Promise<string> {
  const res = await axios.post(`${SD_WEBUI_URL}/sdapi/v1/txt2img`, {
    prompt,
    steps: 20,
    cfg_scale: 7.5,
    width: 512,
    height: 512,
    sampler_name: 'Euler a'
  })
  return res.data.images[0] // base64 string
}