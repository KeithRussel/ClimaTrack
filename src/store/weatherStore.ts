import { create } from 'zustand';
import { Weather, Forecast } from '../entities/Weather'; // Interfaces for data structure

// Define the shape of your weather state
interface WeatherState {
  city: string; // The currently selected city
  weatherData: Weather | null; // Data for current weather (or null if not fetched yet)
  forecastData: Forecast | null; // Data for forecast (or null if not fetched yet)
  setCity: (city: string) => void; // Function to update the city
  setWeatherData: (data: Weather) => void; // Function to set current weather data
  setForecastData: (data: Forecast) => void; // Function to set forecast data
}

// Create your Zustand store
const useWeatherStore = create<WeatherState>((set) => ({
  city: 'London', // Initial default city
  weatherData: null, // Initial weather data state
  forecastData: null, // Initial forecast data state

  // Action to update the city in the store
  setCity: (city) => set({ city }),
  // Action to update the current weather data in the store
  setWeatherData: (data) => set({ weatherData: data }),
  // Action to update the forecast data in the store
  setForecastData: (data) => set({ forecastData: data }),
}));

export default useWeatherStore;