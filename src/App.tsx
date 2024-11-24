import CurrentWeather from './components/CurrentWeather';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <CurrentWeather />
    </ErrorBoundary>
  );
}

export default App;
