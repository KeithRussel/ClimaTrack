import axios from 'axios'; // HTTP client for making API requests
import { Weather, Forecast } from '../entities/Weather'; // Data interfaces

// Access your API key from environment variables (recommended for security)
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
// Base URL for OpenWeatherMap API
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * Fetches current weather data for a given city.
 * @param city The name of the city.
 * @returns A Promise that resolves to the Weather data.
 */
export const getWeatherData = async (city: string): Promise<Weather> => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city, // Query parameter for city name
      appid: API_KEY, // Your API key
      units: 'metric', // Request temperature in Celsius
    },
  });
  return response.data; // Return the actual weather data
};

/**
 * Fetches 5-day / 3-hour forecast data for a given city.
 * @param city The name of the city.
 * @returns A Promise that resolves to the Forecast data.
 */
export const getForecastData = async (city: string): Promise<Forecast> => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};