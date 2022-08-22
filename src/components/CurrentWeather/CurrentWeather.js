import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = ({ props }) => {
  return (
    <div className='weather'>
      <div className='top'>
        <div className='paragraphs'>
          <p className='city'>{props.city}</p>
          <p className='weather_description'>{props.weather[0].description}</p>
        </div>
        <img
          alt='weather'
          className='weather_icon'
          src={`icons/${props.weather[0].icon}.png`}
        />
      </div>
      <div className='bottom'>
        <p className='temperature'>{Math.round(props.main.temp)} ºC</p>
        <div className='details'>
          <div className='parameter_row'>
            <span className='parameter-label'>Details</span>
          </div>
          <div className='parameter_row'>
            <span className='parameter-label'>Feels Like</span>
            <span className='parameter-value'>
              {`${props.main.feels_like}ºC`}
            </span>
          </div>{' '}
          <div className='parameter_row'>
            <span className='parameter-label'>Wind</span>
            <span className='parameter-value'>{`${props.wind.speed} m/s`}</span>
          </div>
          <div className='parameter_row'>
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>
              {Math.round(props.main.humidity)} %
            </span>
          </div>
          <div className='parameter_row'>
            <span className='parameter-label'>Pressure</span>
            <span className='parameter-value'>
              {Math.round(props.main.pressure)} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
