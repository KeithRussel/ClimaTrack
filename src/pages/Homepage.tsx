import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';

const Homepage = () => {
  return (
    <>
      <div>
        <CurrentWeather />
      </div>
      <div>{/* <Forecast /> */}</div>
    </>
  );
};

export default Homepage;
