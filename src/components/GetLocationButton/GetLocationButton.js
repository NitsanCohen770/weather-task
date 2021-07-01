import React from 'react';
import PropTypes from 'prop-types';
import { GetLocationWrapper } from './style';
import Icon from '@material-ui/core/Icon';

const GetLocationButton = ({ getLocation }) => {
  return (
    <GetLocationWrapper onClick={getLocation}>
      <div>Get My Location Weather </div>

      <Icon className="fa fa-plus-circle" />
    </GetLocationWrapper>
  );
};

GetLocationButton.propTypes = {
  getLocation: PropTypes.func,
};

export default GetLocationButton;
