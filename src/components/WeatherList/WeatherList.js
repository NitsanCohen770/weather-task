import React from 'react';
import PropTypes from 'prop-types';
import WeatherCard from '../WeatherCard/WeatherCard';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const date = new Date();
const days = [
  {
    day: 'Today',
    date: date.getDate(),
  },
  {
    day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      date.setDate(date.getDate() + 1)
    ),
    date: date.getDate(),
  },
  {
    day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      date.setDate(date.getDate() + 1)
    ),
    date: date.getDate(),
  },
  {
    day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      date.setDate(date.getDate() + 1)
    ),
    date: date.getDate(),
  },
  {
    day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      date.setDate(date.getDate() + 1)
    ),
    date: date.getDate(),
  },
  {
    day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      date.setDate(date.getDate() + 1)
    ),
    date: date.getDate(),
  },
  {
    day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      date.setDate(date.getDate() + 1)
    ),
    date: date.getDate(),
  },
];
const defaultState = {
  0: true,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
};
const WeatherList = ({ weatherData }) => {
  const [enlarged, setEnlarged] = useState(defaultState);
  return days.map((weather, index) => {
    return (
      <div
        onClick={() => {
          if (index === 0) {
            setEnlarged({ ...defaultState });
          } else {
            setEnlarged({ ...defaultState, [index]: true, 0: false });
          }
        }}
        key={nanoid()}
        style={{
          display: 'inline-flex',
          marginTop: '50px',
        }}
      >
        <WeatherCard
          day={weather.day}
          date={weather.date}
          feelsLike={weatherData?.feelslike}
          temperature={weatherData?.temperature}
          icon={weatherData?.weather_icons[0]}
          enlarged={enlarged[index]}
          weatherDescription={weatherData?.weather_descriptions[0]}
        />
      </div>
    );
  });
};

WeatherList.propTypes = {
  weatherData: PropTypes.object,
};

export default WeatherList;
