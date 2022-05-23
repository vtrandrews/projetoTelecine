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
      height: 100%;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 1220px;
    height: 250px;
    margin-bottom: 50px;
  }

  h6.last-child{
    margin: auto 0px auto auto;
  }

  h6{
    width: 75%;
  }

  p {
    width: 75%;
  }
`;