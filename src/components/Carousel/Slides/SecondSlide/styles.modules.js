import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const Container = styled(Box)`
  &.MuiBox-root{
    @media (max-width: 1220px) {
      //MOBILE
      display: block;
    }
    display: flex;
    align-items: center;
    justify-content: left;
    margin: 0;
    padding: 0;
  }
`;

export const TextBox = styled(Box)`
  &.MuiBox-root{
    @media (max-width: 1220px) {
      //MOBILE
      width: 100%;
      height: 400px;
      left: auto;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    width: 50%;
    height: 580px;
    color: #FFF;
    background-color: blue;
  }	
`;

export const ImgBox = styled(Box)`
  &.MuiBox-root{
    @media (max-width: 1220px) {
      //MOBILE
      width: 100%;
      height: 400px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    width: 50%;
    height: 580px;
    z-index: -1;
  }

  img{
    @media (max-width: 1220px) {
      //MOBILE
      width: 100%;
    }
    width: 810px;
    z-index: -1;
  }
`;