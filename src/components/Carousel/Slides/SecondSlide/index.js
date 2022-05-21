import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import {
  Container, TextBox, ImgBox
} from './styles.modules';

export function SecondSlide() {
  const matches = useMediaQuery("(max-width:1220px)");

  return (
    <Container>
      {
        matches ?
          <>
            <ImgBox>
              <img src="https://pbs.twimg.com/media/Ep8NbBkW8AIN57d?format=jpg&name=large" />
            </ImgBox>
            <TextBox>
              <h1>Second Slide</h1>
            </TextBox>
          </>
          :
          <>
            <TextBox>
              <h1>Second Slide</h1>
            </TextBox>
            <ImgBox>
              <img src="https://pbs.twimg.com/media/Ep8NbBkW8AIN57d?format=jpg&name=large" />
            </ImgBox>
          </>
      }
    </Container>
  )
}

export default SecondSlide;