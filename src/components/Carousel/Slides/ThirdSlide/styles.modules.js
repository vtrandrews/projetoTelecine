import styled from 'styled-components';
import { Box, Typography } from '@material-ui/core';

export const Container = styled(Box)`
  &.MuiBox-root{
    @media (max-width: 1220px) {
      //MOBILE
      display: block;
    }
    width: 100%;
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
    background-color: #010060;
  }	
`;

export const TextArea = styled(Box)`
  &.MuiBox-root{
    @media (max-width: 1220px) {
      //MOBILE
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 400px;
      padding: 0;
    }
    display: inline-block;
    align-items: center;
    text-align: left;
    width: 500px;
    height: 500px;
    color: #FFF;
    padding: 30px 0px 0px 60px;
  }

  .ajusta-texto{
    @media (max-width: 1220px) {
      //MOBILE
      display: flex;
    }
    @media (max-width: 710px) {
      width: 80%;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }

  .ajuste-area{
    &.MuiTypography-root{
      margin-top: 60px;
    }
  }

  .texto-fino{
    &.MuiTypography-root{
      @media (max-width: 1220px) {
        //MOBILE
        font-size: 32px;
        margin-right: 5px;
      }
      font-size: 54px;
      font-weight: 300;
      color: #ffff66;
      font-family: 'Oswald', sans-serif;
    }
  }

  .subtexto{
    &.MuiTypography-root{
      @media (max-width: 1220px) {
        //MOBILE
        font-size: 24px;
        margin-right: 3px;
      }
      font-size: 32px;
      font-weight: 500;
      color: #fff;
      font-family: 'Oswald', sans-serif;
    }
  }

  .subtexto-fino{
    &.MuiTypography-root{
      @media (max-width: 1220px) {
        //MOBILE
        font-size: 24px;
        margin-right: 3px;
        margin-top: 0;
      }
      margin-top: 20px;
      font-size: 32px;
      font-weight: 300;
      color: #fff;
      font-family: 'Oswald', sans-serif;
    }
  }
`;

export const TypographyStyled = styled(Typography)`
  &.MuiTypography-root{
    @media (max-width: 1220px) {
      //MOBILE
      font-size: 32px;
      margin-right: 5px;
    }
    font-size: 54px;
    font-weight: 600;
    color: #ffff66;
    font-family: 'Oswald', sans-serif;
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
      height: 440px;
      object-fit: cover;
    }
    width: 810px;
    z-index: -1;
  }
`;