import styled from 'styled-components';

export const GetLocationWrapper = styled.div`
  position: absolute;
  display: flex;
  cursor: pointer;
  margin-top: 6px;
  margin-left: 150px;
  right: 60;
  top: 20;
  color: white;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  padding: 5px;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;

  > div:first-child {
    margin-right: 10px;
  }
`;
