import { PmLocationData } from "../entities/pm-location-data";
export const getPM2_5 = async () : Promise<PmLocationData> => {
    const response = await fetch(`https://api.waqi.info/feed/here/?token=${process.env.WAQI_API_KEY}`);
    return await response.json();
}