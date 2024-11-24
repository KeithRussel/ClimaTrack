import {create} from 'zustand';
import { Weather, Forecast } from '../entities/Weather';

interface WeatherState {
  city: string;
  weatherData: Weather | null;
  forecastData: Forecast | null;
  setCity: (city: string) => void;
  setWeatherData: (data: Weather) => void;
  setForecastData: (data: Forecast) => void;
}

const useWeatherStore = create<WeatherState>((set) => ({
  city: 'London',
  weatherData: null,
  forecastData: null,
  setCity: (city) => set({ city }),
  setWeatherData: (data) => set({ weatherData: data }),
  setForecastData: (data) => set({ forecastData: data }),
}));

export default useWeatherStore;
