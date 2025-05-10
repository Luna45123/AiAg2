import { exec } from "node:child_process";
import { marked } from "marked";
import * as path from "node:path";
import * as process from "node:process";
import * as fs from "node:fs";
import { generateHtml, openInBrowser } from "../utils/html";

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
