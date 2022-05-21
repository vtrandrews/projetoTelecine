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
              <img src="images/PoderosoChef_esticada.png" />
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
              <img src="images/PoderosoChef_quad.png" />
            </ImgBox>
          </>
      }
    </Container>
  )
}

export default SecondSlide;