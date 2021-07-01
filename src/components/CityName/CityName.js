import React from 'react';
import PropTypes from 'prop-types';
import { CityNameWrapper } from './styles';

const CityName = ({ cityName }) => {
  return <CityNameWrapper>{cityName} </CityNameWrapper>;
};

CityName.propTypes = {
  cityName: PropTypes.string,
};

export default CityName;
