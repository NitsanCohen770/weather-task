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
    id: nanoid(),
  },
  {
    day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      date.setDate(date.getDate() + 1)
    ),
    date: date.getDate(),
    id: nanoid(),
  },
  {
    day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      date.setDate(date.getDate() + 1)
    ),
    date: date.getDate(),
    id: nanoid(),
  },
  {
    day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      date.setDate(date.getDate() + 1)
    ),
    date: date.getDate(),
    id: nanoid(),
  },
  {
    day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      date.setDate(date.getDate() + 1)
    ),
    date: date.getDate(),
    id: nanoid(),
  },
  {
    day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      date.setDate(date.getDate() + 1)
    ),
    date: date.getDate(),
    id: nanoid(),
  },
  {
    day: new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      date.setDate(date.getDate() + 1)
    ),
    date: date.getDate(),
    id: nanoid(),
  },
];

const WeatherList = ({ weatherData }) => {
  const [enlarged, setEnlarged] = useState(0);
  return days.map((weather, index) => {
    return (
      <div
        key={weather.id}
        onClick={() => setEnlarged(index)}
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
          enlarged={index === enlarged}
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
