export interface Weather {
    main: {
      temp: number;
      humidity: number;
    };
    weather: {
      description: string;
    }[];
  }
  
  export interface Forecast {
    list: {
      dt_txt: string;
      main: {
        temp: number;
      };
      weather: {
        description: string;
      }[];
    }[];
  }
  