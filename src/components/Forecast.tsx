import { useQuery } from '@tanstack/react-query';
import { getForecastData } from '../services/weatherService';
import useWeatherStore from '../store/weatherStore';
import styled from '@emotion/styled';

// Styled component for the forecast container
const ForecastContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`;

const ForecastTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const ForecastList = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to next line */
  justify-content: space-around;
  gap: 15px; /* Space between forecast items */
`;

const ForecastItemCard = styled.div`
  flex: 1 1 180px; /* Allow items to grow/shrink, with a base width */
  min-width: 150px;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const ForecastTime = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  color: #444;
`;

const ForecastTemp = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
`;

const ForecastDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  text-transform: capitalize;
`;

const Forecast = () => {
  const { city } = useWeatherStore(); // Get the current city from Zustand store

  // Fetch forecast data using React Query
  const { data, isLoading, error } = useQuery({
    queryKey: ['forecast', city], // Unique key for this query
    queryFn: () => getForecastData(city), // API call function
    enabled: !!city, // Only run if a city is provided
  });

  if (!city) {
    return null; // Don't show forecast section if no city is selected
  }

  if (isLoading)
    return (
      <ForecastContainer>
        <div>Loading forecast for {city}...</div>
      </ForecastContainer>
    );
  if (error instanceof Error)
    return (
      <ForecastContainer>
        <div>
          Error fetching forecast for {city}: {error.message}
        </div>
      </ForecastContainer>
    );

  return (
    <ForecastContainer>
      <ForecastTitle>
        Weather Forecast for {data?.city?.name}, {data?.city?.country}
      </ForecastTitle>
      <ForecastList>
        {/* Map through the forecast list and display each item */}
        {data?.list.map((forecast, index) => (
          <ForecastItemCard key={index}>
            <ForecastTime>
              {new Date(forecast.dt_txt).toLocaleString()}
            </ForecastTime>{' '}
            {/* Format date/time */}
            {/* You would typically use an icon here as well */}
            <ForecastTemp>{forecast.main.temp}°C</ForecastTemp>
            <ForecastDescription>
              {forecast.weather[0]?.description}
            </ForecastDescription>
          </ForecastItemCard>
        ))}
      </ForecastList>
    </ForecastContainer>
  );
};

export default Forecast;
