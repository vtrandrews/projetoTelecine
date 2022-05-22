import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const Container = styled(Box)`
  &.MuiBox-root{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  .carousel{
    @media (max-width: 1220px) {
      //MOBILE
      width: 100%;
    }
    margin-bottom: 50px;
  }

  .carousel-inner {
    @media (max-width: 1220px) {
      //MOBILE
      width: 100%;
      height: 800px;
    }
    width: 1220px;
    height: 580px;
  }

  .carousel-control-next, .carousel-control-prev {
    @media (max-width: 1220px) {
      //MOBILE
      height: 400px;
    }
    height: 100%;
  }
`;