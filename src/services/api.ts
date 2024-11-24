import axios from "axios";
import { WeatherResponse } from "../entities/WeatherResponse";

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
});

export const fetchWeather = async (
    city: string,
    unit: 'metric' | 'imperial'
): Promise<WeatherResponse> => {
    const response = await api.get('/weather', {
        params: {
            q: city,
            units: unit,
            appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
        },
    });
    
    return response.data;
}

// export const fetchForecast = async (city: string, unit: 'metric' | 'imperial') => {
//     const response = await api.get('/forecast', {
//         params: {
//             q: city,
//             units: unit,
//             appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
//         }
//     });
//     return response.data;
// }

export default api;