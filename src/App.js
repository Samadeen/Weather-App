import { useState } from 'react';
import Search from './components/Search/Search';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Forecast from './components/Forecast/Forecast';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api/api';

import './App.css';

function App() {
  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();
  const [loading, setIsLoading] = useState(false);

  const onSearchChangeHandler = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');
    setIsLoading(true);

    const currentWeatherFetcher = fetch(
      `${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetcher = fetch(
      `${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetcher, forecastFetcher]).then(async (res) => {
      const weatherRes = await res[0].json();
      const forecastRes = await res[1].json();

      setIsLoading(false);
      setCurrentWeather({ city: searchData.label, ...weatherRes });
      setForecast({ city: searchData.label, ...forecastRes });
    });
  };

  console.log(currentWeather, forecast);

  return (
    <div className='container'>
      <Search onSearchChange={onSearchChangeHandler} />
      {currentWeather && (
        <CurrentWeather props={currentWeather} loading={loading} />
      )}
      {forecast && <Forecast props={forecast} />}
    </div>
  );
}

export default App;
