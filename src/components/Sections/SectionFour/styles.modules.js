import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const Container = styled(Box)`
  &.MuiBox-root{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const Content = styled(Box)`
  &.MuiBox-root{
    @media (max-width: 1220px) {
      border-radius: 0;
    }
    background-color: #111111;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 1220px;
    height: 500px;
    padding: 30px;
    margin-bottom: 50px;
  }
`;

export const CentralBox = styled(Box)`
  &.MuiBox-root{
    @media (max-width: 1220px) {
    }
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

export const TextBox = styled(Box)`
  &.MuiBox-root{
    margin: 20px 0px;
    width: 100%;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const TechBox = styled(Box)`
  &.MuiBox-root{
    @media (max-width: 1220px) {
      flex-direction: column;
    }
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .alinha-techs{
    display: flex;
    flex-direction: row;
  }
`;

export const TechBoxItem = styled(Box)`
  &.MuiBox-root{
    width: 100px;
    height: 100px;
    margin: 0px 20px 55px 20px;
    background-color: #333333;
    border-radius: 10px;
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
`;