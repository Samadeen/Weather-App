import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = () => {
  return (
    <div className='weather'>
      <div className='top'>
        <div className='paragraphs'>
          <p className='city'>Lagos</p>
          <p className='weather_description'>Sunny</p>
        </div>
        <img alt='weather' className='weather_icon' src='icons/01d.png' />
      </div>
      <div className='bottom'>
        <p className='temperature'>18ºC</p>
        <div className='details'>
          <div className='parameter_row'>
            <span className='parameter-label'>Details</span>
          </div>
          <div className='parameter_row'>
            <span className='parameter-label'>Feels Like</span>
            <span className='parameter-value'>22ºC</span>
          </div>
          <div className='parameter_row'>
            <span className='parameter-label'>Wind</span>
            <span className='parameter-value'>2 m/s</span>
          </div>
          <div className='parameter_row'>
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>15%</span>
          </div>
          <div className='parameter_row'>
            <span className='parameter-label'>Pressure</span>
            <span className='parameter-value'>15 hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
