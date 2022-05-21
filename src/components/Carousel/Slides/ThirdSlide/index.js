import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import {
  Container, TextBox, ImgBox
} from './styles.modules';

export function ThirdSlide() {
  const matches = useMediaQuery("(max-width:1220px)");

  return (
    <Container>
      {
        matches ?
          <>
            <ImgBox>
              <img src="https://jovemnerd.com.br/wp-content/uploads/2022/02/Occhiali-neri-cartaz.png" />
            </ImgBox>
            <TextBox>
              <h1>Third Slide</h1>
            </TextBox>
          </>
          :
          <>
            <TextBox>
              <h1>Third Slide</h1>
            </TextBox>
            <ImgBox>
              <img src="https://jovemnerd.com.br/wp-content/uploads/2022/02/Occhiali-neri-cartaz.png" />
            </ImgBox>
          </>
      }
    </Container>
  )
}

export default ThirdSlide;