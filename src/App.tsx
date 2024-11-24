import CurrentWeather from './components/CurrentWeather';
import ErrorBoundary from './components/ErrorBoundary';
import Forecast from './components/Forecast';

function App() {
  return (
    <ErrorBoundary>
      <CurrentWeather />
      <Forecast />
    </ErrorBoundary>
  );
}

export default App;
