import React from 'react';

import GetLocationButton from '../components/GetLocationButton/GetLocationButton';

export default {
  title: 'GetLocationButton',
  component: GetLocationButton,
  argTypes: {},
};

const Template = args => <GetLocationButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  getLocation: () => {},
};
