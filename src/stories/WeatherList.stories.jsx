import React from 'react';

import WeatherList from '../components/WeatherList/WeatherList';

export default {
  title: 'WeatherList',
  component: WeatherList,
  argTypes: {
 
  },
};

const Template = (args) => <WeatherList {...args} />;

export const List = Template.bind({});
List.args = {
  enlarged: false,
  
};

