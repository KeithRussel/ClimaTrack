// Interface for the current weather data structure
export interface Weather {
  main: {
    temp: number; // Temperature in Celsius
    humidity: number; // Humidity percentage
    // Add other properties if needed, e.g., 'feels_like', 'pressure'
  };
  weather: {
    description: string; // Weather condition description (e.g., "clear sky")
    icon: string; // Add the 'icon' property here
    // Add other properties if needed, e.g., 'id', 'main', 'icon'
  }[]; // Array because there can be multiple weather conditions (though often just one)
  name: string; // The city name (from current weather API response)
  sys: {
    country: string; // Country code (e.g., "GB")
  };
}

// Interface for a single forecast entry
interface ForecastItem {
  dt_txt: string; // Date and time of the forecast
  main: {
    temp: number; // Temperature for this forecast entry
  };
  weather: {
    description: string; // Weather description for this forecast entry
    icon: string; // Add the 'icon' property here for forecast items
  }[];
}

// Interface for the overall forecast data structure
export interface Forecast {
  list: ForecastItem[]; // An array of forecast items
  city: {
    name: string; // City name (from forecast API response)
    country: string; // Country code
  };
}