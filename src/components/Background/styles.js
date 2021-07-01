import styled from 'styled-components';
import dayBackground from '../../assets/images/day.jpg';
import nightBackground from '../../assets/images/night.jpg';

export const StyledBackground = styled.div`
  background-image: url(${props =>
    props.day === 'yes' ? dayBackground : nightBackground});
  background-size: cover;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
