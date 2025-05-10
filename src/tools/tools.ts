import {getCurrentWeather} from "./weather";
import {getLocation} from "./location";
import {getPM2_5} from "./pm";
import { generatePicture } from "./pic";

export const tools = [
    {
        type: 'function',
        function: {
            name: 'getLocation',
            description: 'Fetches the location data of the user based on their IP address.',
            parameters: {
                type: 'object',
                properties: {}
            }
        }
    },
    {
        type: 'function',
        function:{
            name: 'getCurrentWeather',
            description: 'Fetches the current weather data for a given location.',
            parameters: {
                type: 'object',
                properties: {
                    latitude: { type: 'string' },
                    longitude: { type: 'string' },
                }
            }
        }
    },
    {
        type: 'function',
        function:{
            name: 'getPM25',
            description: 'Fetches the current PM2.5 data for a given location.',
            parameters: {
                type: 'object',
                properties: {

                }
            }
        }
    },
    {
        type: 'function',
        function:{
            name: 'generatePicture',
            description: 'Generates a picture based on the given prompt and image size according from user prompt. If no size is specified, use the default size of wide:512 and long:512.',
            parameters: {
                type: 'object',
                properties: {
                    prompt: { type: 'string' },
                    width: { type: 'number' },
                    height: { type: 'number' },
                }
            }
        }
    }
]

export const availableTools: {[key:string]: Function} = {
    'getLocation': getLocation,
    'getCurrentWeather': getCurrentWeather,
    'getPM25': getPM2_5,
    'generatePicture': generatePicture,
}