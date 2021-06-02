export interface Weather {
  name: string;
  main: WeatherMain;
  weather: WeatherDescription[];
}

export interface WeatherMain {
  temp: number;
  pressure: number;
  humidity: number;
}

export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export type WeatherType =
  | 'clear sky'
  | 'few clouds'
  | 'scattered clouds'
  | 'broken clouds'
  | 'shower rain'
  | 'rain'
  | 'thunderstorm'
  | 'snow'
  | 'mist';
