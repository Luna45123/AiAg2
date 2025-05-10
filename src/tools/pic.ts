import axios from "axios";
import path from 'path';
import fs from 'fs';
import { exec } from "child_process";


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
        override_settings: {
            sd_model_checkpoint: "anything-v4.0.ckpt [3b26c9c497]"
        }
    });

    const imageBase64 = response.data.images[0]
    const outputDir = path.resolve("./output");
    const outputPath = getUniqueFilename(outputDir, 'output', '.png');
    const imageBuffer = Buffer.from(imageBase64, 'base64')

    fs.writeFileSync(outputPath, imageBuffer)
    console.log('ภาพถูกบันทึกที่:', outputPath)

    const openCommand =
        process.platform === 'win32'
            ? `start ${outputPath}`
            : process.platform === 'darwin'
                ? `open ${outputPath}`
                : `xdg-open ${outputPath}`

    exec(openCommand)
    return JSON.stringify({
        message: `info ${response.data.info}`,
        done: true
    });
}

function getUniqueFilename(baseDir: string, baseName: string, ext: string): string {
    let filename = `${baseName}${ext}`;
    let counter = 1;

    while (fs.existsSync(path.join(baseDir, filename))) {
        filename = `${baseName}_${counter}${ext}`;
        counter++;
    }

    return path.join(baseDir, filename);
}