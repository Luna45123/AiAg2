export const getCurrentWeather = async (latitude: number, longitude: number) : Promise<any> => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    const response = await fetch(url)
    return await response.json()
}