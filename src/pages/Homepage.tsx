import CurrentWeather from '../components/CurrentWeather'; // Component to display current weather
import Forecast from '../components/Forecast'; // Component to display weather forecast
import WeatherSearch from '../components/WeatherSearch'; // Component for city search input

const Homepage = () => {
  return (
    <>
      <h1>ClimaTrack</h1> {/* A main title for your app */}
      <WeatherSearch /> {/* The search input for the city */}
      <CurrentWeather /> {/* Displays the current weather data */}
      <Forecast /> {/* Displays the weather forecast data */}
    </>
  );
};

export default Homepage;
