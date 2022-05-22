import styled from 'styled-components';
import { Box, Button } from '@material-ui/core';

export const Header = styled(Box)`
  &.MuiBox-root{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #111111;
    width: 100%;
    height: 80px;
  }
`;

export const HeaderContent = styled(Box)`
  &.MuiBox-root{
    @media(max-width: 1450px){
      width: 100%;
      padding: 0px 20px;
    }
    display: flex;
    height: 100%;
    width: 65%;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ContentLeft = styled(Box)`
  &.MuiBox-root{
    display: flex;
    align-items: center;
    justify-content: left;
  }

  ul{
    margin: 0;
    padding: 0;
  }

  li{
    display: inline;
    list-style: none;
    margin-left: 50px;
    font-size: 16px;
  }

  a{
    text-decoration: none;
    color: #FFF;
  }
`;

export const ContentRight = styled(Box)`
  &.MuiBox-root{
    display: flex;
    align-items: center;
    justify-content: right;
  }

  a {
    text-decoration: none;
    color: #FFF;
  }
`;

export const ButtonStyled = styled(Button)`
  &.MuiButton-root{
    @media(max-width: 600px){
      display: none;
    }
    border-radius: 10px;
    text-transform: none;
    font-size: 14px;
    font-weight: 600;
    width: 200px;
    height: 43px;
    background: rgb(255,41,41);
    background: linear-gradient(90deg, rgba(255,41,41,1) 0%, rgba(195,33,33,1) 100%);
  }

`