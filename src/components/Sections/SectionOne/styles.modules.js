import styled from 'styled-components';
import { Avatar, Box } from '@material-ui/core';

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
      flex-direction: column;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 1220px;
    height: 500px;
    margin-bottom: 50px;
  }
`;

export const LeftBox = styled(Box)`
  &.MuiBox-root{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
  }
`;

export const RightBox = styled(Box)`
  &.MuiBox-root{
    @media (max-width: 1220px) {
      margin-top: 30px;
      margin-bottom: 30px;
    }
    display: inline-block;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
  }

  .titulo{
    width: 100%;
    min-height: 70px;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #fff;
  }

  .sub-titulo{
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #fff;
  }
`;

export const AvatarStyled = styled(Avatar)`
  &.MuiAvatar-root{
    width: 350px;
    height: 350px;
    transition: all 0.3s;
  }

  :hover{
    width: 380px;
    height: 380px;
    transition: all 0.5s;
  }

  img{
    transition: all 0.3s;
  }

  img:hover{
    width: 380px;
    transition: all 0.5s;
  }
`;