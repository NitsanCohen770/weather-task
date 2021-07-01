import React from 'react';
import PropTypes from 'prop-types';
import { StyledBackground } from './styles';
const Background = ({ isDay }) => {
  return <StyledBackground isDay={isDay}></StyledBackground>;
};

Background.propTypes = { isDay: PropTypes.string };

export default Background;
