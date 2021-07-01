import React from 'react';
import PropTypes from 'prop-types';
import { WeatherCardWrapper } from './styles';
import { WiCelsius } from 'weather-icons-react';

const WeatherCard = ({
  day,
  date,
  feelsLike,
  temperature,
  icon,
  weatherDescription,
  enlarged,
}) => {
  return (
    <WeatherCardWrapper enlarged={enlarged}>
      <div>
        <div>{day} </div>
        <div> {date}th</div>
      </div>
      <div>
        <img
          style={{
            width: '25%',
            height: '25%',
          }}
          alt={weatherDescription}
          src={icon}
        />
        <div
          style={{
            display: 'inline-block',
            marginLeft: '20px',
          }}
        >
          <strong>{feelsLike}</strong>
          <WiCelsius />
          <div>
            {temperature}
            <WiCelsius />
          </div>
        </div>
      </div>
      {enlarged && (
        <>
          <div
            style={{
              borderLeft: ' 2px solid black',
              height: '70px',
              position: 'absolute',
              left: '50%',
              marginleft: '-3px',
              bottom: '0',
            }}
          >
            {' '}
            <div style={{ marginLeft: '10px' }}>{weatherDescription}</div>
          </div>
        </>
      )}
    </WeatherCardWrapper>
  );
};

WeatherCard.propTypes = {
  day: PropTypes.string,
  date: PropTypes.number,
  feelsLike: PropTypes.number,
  temperature: PropTypes.number,
  icon: PropTypes.string,
  weatherDescription: PropTypes.string,
  enlarged: PropTypes.bool,
};

export default WeatherCard;
