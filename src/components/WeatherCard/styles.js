import styled from 'styled-components';

export const WeatherCardWrapper = styled.div`
  position: relative;
  background: white;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  width: ${props => (props.enlarged ? '250px' : '100px')};
  height: 100px;
  border-bottom: ${props => !props.enlarged && '4px solid orangered'};
  border-top: ${props => props.enlarged && '5px solid orangered'};
  font-family: 'Roboto', sans-serif;
  font-size: ${props => (props.enlarged ? '15px' : '12px')};

  > div:first-child {
    margin-top: ${props => props.enlarged && '10px'};
    display: block;

    > div {
      display: inline;
    }

    > div:nth-child(2) {
      color: gray;
    }
  }
`;
