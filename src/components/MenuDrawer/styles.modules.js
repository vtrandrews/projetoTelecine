import styled from 'styled-components';
import { Box, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export const Container = styled(Box)`
  &.MuiBox-root{
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`;

export const BoxMenu = styled(Box)`
  &.MuiBox-root{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    margin: 0;
    padding: 0;
  }

  ul{
    width: 100%;
    margin: 0;
    padding: 0;
  }

  li{
    display: flex;
    list-style: none;
    justify-content: left;
    margin: 0px;
    font-size: 16px;
    border-top: 1px solid #444444;
    padding: 10px 20px;
  }

  a{
    text-decoration: none;
    color: #FFF;
  }
`;

export const ButtonStyled = styled(Button)`
  &.MuiButton-root{
    margin: 15px;
    border-radius: 10px;
    text-transform: none;
    font-size: 14px;
    font-weight: 600;
    color: #FFF;
    width: 90%;
    height: 40px;
    background: rgb(255,41,41);
    background: linear-gradient(90deg, rgba(255,41,41,1) 0%, rgba(195,33,33,1) 100%);
  }
`

export const MenuLateral = styled(Box)`
  &.MuiBox-root{
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 330px;
    height: 100%;
    background: #111111;
    z-index: +2;
  }
`;

export const FundoDrawer = styled(Box)`
  &.MuiBox-root{
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: +1;
    background: #000;
    opacity: 0.6;
  }
`;

export const LabelFechaDrawer = styled.label`
  color: #FFF;
  font-size: 18px;
  margin: 10px 20px 0px auto;
`;

export const IconButtonStyled = styled(MenuIcon)`
  &.MuiSvgIcon-root{
    color: #FFF;
    font-size: 40px;
    margin-right: 20px;
  }
`;