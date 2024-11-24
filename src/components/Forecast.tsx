import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getForecastData } from '../services/weatherService';
import useWeatherStore from '../store/weatherStore';

const Forecast = () => {
  const { city } = useWeatherStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ['forecast', city],
    queryFn: () => getForecastData(city), // Fetch function
    enabled: !!city, // Run only when a city is provided
  });

  if (isLoading) return <div>Loading forecast...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Weather Forecast for {city}</h2>
      {data?.list.map((forecast, index) => (
        <div key={index}>
          <p>Time: {forecast.dt_txt}</p>
          <p>Temperature: {forecast.main.temp}°C</p>
          <p>Weather: {forecast.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default Forecast;
