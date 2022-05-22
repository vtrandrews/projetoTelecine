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
    }
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 1220px;
    height: 500px;
    margin-bottom: 50px;
    border: 1px solid red;
  }
`;