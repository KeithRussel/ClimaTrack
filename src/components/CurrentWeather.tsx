import { useQuery } from '@tanstack/react-query';
import { getWeatherData } from '../services/weatherService';
import useWeatherStore from '../store/weatherStore';
import WeatherSearch from './WeatherSearch';

const CurrentWeather = () => {
  const { city } = useWeatherStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ['weather', city],
    queryFn: () => getWeatherData(city), // Fetch function
    enabled: !!city, // Run only when a city is provided
  });
  // console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <>
      <WeatherSearch />
      <h2>Current Weather in {city}</h2>
      <p>Temperature: {data?.main?.temp}°C</p>
      <p>Weather: {data?.weather[0]?.description}</p>
    </>
  );
};

export default CurrentWeather;
