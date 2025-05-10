import { LocationData } from '../entities/location-data';

export const getLocation = async () : Promise<LocationData> => {
    const response = await fetch(`https://apiip.net/api/check?accessKey=${process.env.API_IP_KEY}`);
    return await response.json();
}