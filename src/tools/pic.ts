import axios from "axios";
import { buildHtmlFileAndOpen } from "../utils/html";


export const generatePicture = async (prompt: string, width: number, height: number): Promise<any> => {
    console.log("generate....")
    console.log("prompt: ", prompt)
    const response = await axios.post(`http://127.0.0.1:7860/sdapi/v1/txt2img`, {
        prompt: prompt,
        negative_prompt: "{{nsfw}},{{underwear}},{{nipple}},{{nipples}}, {{fucked}},{{naked}},bad quality, extra fingers,low resolution,bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad legs,bad quality,bad anatomy,worst quality,low quality,low resolution,extra fingers,blur,blurry,ugly,wrong proportions,watermark,image artifacts,lowres,ugly,jpeg artifacts,deformed,noisy image",
        steps: 20,
        cfg_scale: 7.5,
        width: width,
        height: height,
        sampler_name: 'Euler a',
        // override_settings: {
        //     sd_model_checkpoint: "v1-5-pruned-emaonly.safetensors [6ce0161689]"
        // }
    });

    const imageBase64 = response.data.images[0]
    buildHtmlFileAndOpen(imageBase64)

    return response.data.info;
}