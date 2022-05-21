import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import {
  Container, TextBox, ImgBox
} from './styles.modules';

export function FirstSlide() {
  const matches = useMediaQuery("(max-width:1220px)");

  return (
    <Container>
      {
        matches ?
          <>
            <ImgBox>
              <img src="https://pop.proddigital.com.br/wp-content/uploads/sites/8/2022/04/cartaz-de-doctor-strange-in-the-multiverse-of-madness.png" />
            </ImgBox>
            <TextBox>
              <h1>First Slide</h1>
            </TextBox>
          </>
          :
          <>
            <TextBox>
              <h1>First Slide</h1>
            </TextBox>
            <ImgBox>
              <img src="https://pop.proddigital.com.br/wp-content/uploads/sites/8/2022/04/cartaz-de-doctor-strange-in-the-multiverse-of-madness.png" />
            </ImgBox>
          </>
      }
    </Container>
  )
}

export default FirstSlide;