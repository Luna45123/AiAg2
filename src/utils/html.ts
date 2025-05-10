import {exec} from "node:child_process"
import {marked} from 'marked'
import * as path from "node:path"
import process from "node:process"
import * as fs from "node:fs";

export const generateHtml = (imageBase64?: string) => {
    return`
     <!DOCTYPE html>
    <html lang="th">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ภาพที่สร้างขึ้น</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: #f0f2f5;
                color: #333;
                margin: 0;
                padding: 40px 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
            }

            .container {
                background: #ffffff;
                padding: 30px;
                border-radius: 12px;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
                max-width: 800px;
                width: 100%;
                text-align: center;
            }

            h1 {
                color: #0077cc;
                margin-bottom: 20px;
            }

            img {
                max-width: 100%;
                height: auto;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }

            footer {
                margin-top: 20px;
                font-size: 0.9rem;
                color: #777;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>ภาพที่สร้างขึ้น</h1>
            ${
                imageBase64
                    ? `<img src="data:image/png;base64,${imageBase64}" alt="Generated Image" />`
                    : `<p>ไม่พบภาพ</p>`
            }
            <footer>
                สร้างโดยระบบ AI ณ เวลา ${new Date().toLocaleString('th-TH')}
            </footer>
        </div>
    </body>
    </html>
    `
}

export const buildHtmlFileAndOpen = (
  imageBase64?: string // เพิ่มเข้ามา
) => {
  const html = generateHtml(imageBase64)
  const fileName = 'activity_suggestion.html'
  fs.writeFile(fileName, html, (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`)
      return
    }
    console.log(`HTML file created: ${fileName}`)
    openInBrowser(fileName)
  })
}

export const openInBrowser = (fileName: string) => {
    const filePath = path.resolve(fileName)
    const command = process.platform === 'win32'? 'start' : process.platform === 'darwin'? 'open' : 'xdg-open'

    exec(`${command} ${filePath}`, (error) => {
        if(error) {
            console.error(`Error opening file: ${error}`)
        }
    })
}