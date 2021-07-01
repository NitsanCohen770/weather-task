import React from 'react';

import WeatherCard from '../components/WeatherCard/WeatherCard';

export default {
  title: 'WeatherCard',
  component: WeatherCard,
  argTypes: {
 
  },
};

const Template = (args) => <WeatherCard {...args} />;

export const Small = Template.bind({});
Small.args = {
  day: 'Sunday',
  date: 4,
  feelsLike: 34,
  temperature: 23,
  icon: 'Some url',
  weatherDescription: 'Very, very hot',
  enlarged: false,
  
};


export const Large = Template.bind({});
Large.args = {
  enlarged: true,
};

