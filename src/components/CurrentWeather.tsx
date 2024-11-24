import { useQuery } from '@tanstack/react-query';
import useWeatherStore from '../store/useWeatherStore';
import { fetchWeather } from '../services/api';

const CurrentWeather = () => {
  const { city, unit } = useWeatherStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['weather', city, unit],
    queryFn: () => fetchWeather(city, unit), // Fetch function
    enabled: !!city, // Run only when a city is provided
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching weather data.</div>;
  console.log(data);

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.weather[0].description}</p>
      <p>
        {data?.main.temp}°{unit === 'metric' ? 'C' : 'F'}
      </p>
    </div>
  );
};

export default CurrentWeather;
