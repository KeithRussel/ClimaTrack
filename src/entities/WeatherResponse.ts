export interface WeatherResponse {
    name: string;
    weather: {description: string}[];
    main: {temp: number};
}