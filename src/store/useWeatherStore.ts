import {create} from 'zustand';

interface WeatherState {
    city: string;
    unit: 'metric' | 'imperial';
    setCity: (city: string) => void;
    setUnit: (unit: 'metric' | 'imperial') => void;
}

const useWeatherStore = create<WeatherState>((set) => ({
    city: 'London',
    unit: 'metric',
    setCity: (city) => set({ city}),
    setUnit: (unit) => set({ unit }),
}));

export default useWeatherStore;