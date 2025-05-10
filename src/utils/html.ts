import { marked } from "marked";
import { exec } from "child_process";
import path from "path";
import fs from "fs";


export const genarateHTML = (weatherResponse: string, optionalSuggestions: string, conclusion: string): string => {
    console.log(weatherResponse, optionalSuggestions, conclusion)
    return `
        <!DOCTYPE html>
        <html lang="th">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Weather and Suggestions</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 24px;
                }   
                h1 h2 {
                    color: #4CAF50;
                }
                #section {
                    background-color:rgb(245, 168, 255);
                    border-radius: 8px;
                    padding: 16px;
                    margin-bottom: 24px;
                }
            </style>
  
        <body>
            <h1>Activity suggestion</h1>
            <section>
                <h2>Weather information</h2>
                ${marked(weatherResponse)}
            </section>
            <section>
                <h2>suggestions</h2>
                ${marked(optionalSuggestions)}
            </section>
            <section>
                <h2>Conclusion</h2>
                ${marked(conclusion)}
            </section>
        </body>
        </html>
    `;
};
export const buildHtmlFileAndOpen = (weatherResponse: string, optionalSuggestions: string, conclusion: string) => {
    const htmlContent = genarateHTML(weatherResponse, optionalSuggestions, conclusion);
    const fileName = `output-${new Date().toISOString().slice(0, 10)}.html`;
    const filePath = path.join(__dirname, fileName);
    fs.writeFile(filePath, htmlContent, (error) => {
        if (error) {
            console.error(`Error writing HTML file: ${error.message}`);
        } else {
            openInBrowser(filePath);
        }
    });
}
export const openInBrowser = (fileName: string) => {
    const filePath: string = require('path').resolve(fileName);
        const command = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';

        fs.writeFile(filePath, "", (error) => {
            if (error) {
                console.error(`Error opening file: ${error.message}`);
            } else {
                exec(`${command} ${filePath}`, (error) => {
                    if (error) {
                        console.error(`Error opening file: ${error.message}`);
                    } else {
                        console.log(`File opened successfully: ${filePath}`);
                    }
                });
            }
        });
        exec(`${command} ${filePath}`, (error) => {
            if (error) {
                console.error(`Error opening file: ${error.message}`);
            } else {
                console.log(`File opened successfully: ${filePath}`);
            }
        }
    )
}