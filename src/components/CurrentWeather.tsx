import { useQuery } from '@tanstack/react-query'; // Hook for data fetching
import { getWeatherData } from '../services/weatherService'; // API service function
import useWeatherStore from '../store/weatherStore'; // Zustand store for city state
import styled from '@emotion/styled'; // For styling

// Styled component for the main weather display card
const WeatherCard = styled.div`
  background-color: rgba(
    255,
    255,
    255,
    0.9
  ); /* Semi-transparent white background */
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 30px;
  text-align: center;
  margin-top: 20px;
`;

const CityName = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #007bff; /* A nice blue accent */
`;

const Temperature = styled.p`
  font-size: 4rem; /* Extra large for prominence */
  font-weight: bold;
  margin: 0;
  color: #ff5733; /* Warm orange for temperature */
`;

const WeatherDescription = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
  color: #555;
  text-transform: capitalize; /* Capitalize the first letter of description */
`;

// Helper function to get weather icon URL
const getWeatherIconUrl = (iconCode: string) =>
  `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

const CurrentWeather = () => {
  const { city } = useWeatherStore(); // Get the current city from the Zustand store

  // Use React Query to fetch weather data
  const { data, isLoading, error } = useQuery({
    queryKey: ['weather', city], // Unique key for this query, changes when city changes
    queryFn: () => getWeatherData(city), // Function that performs the API call
    enabled: !!city, // Only run this query if a city is set
  });

  if (!city) {
    return (
      <WeatherCard>
        <p>Please enter a city to see the weather.</p>
      </WeatherCard>
    );
  }

  if (isLoading) {
    return (
      <WeatherCard>
        <div>Loading current weather for {city}...</div>
      </WeatherCard>
    );
  }

  if (error instanceof Error) {
    return (
      <WeatherCard>
        <div>
          Error fetching weather for {city}: {error.message}
        </div>
      </WeatherCard>
    );
  }

  // Display the data once it's available
  return (
    <WeatherCard>
      <CityName>
        Current Weather in {data?.name}, {data?.sys?.country}
      </CityName>
      {data?.weather[0]?.icon && (
        <img
          src={getWeatherIconUrl(data.weather[0].icon)}
          alt={data.weather[0].description}
          width="80"
          height="80"
        />
      )}
      <Temperature>{data?.main?.temp}°C</Temperature>
      <WeatherDescription>{data?.weather[0]?.description}</WeatherDescription>
    </WeatherCard>
  );
};

export default CurrentWeather;
