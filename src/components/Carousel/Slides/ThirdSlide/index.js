import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import {
  Container, TextBox, ImgBox, TextArea,
  TypographyStyled
} from './styles.modules';

export function ThirdSlide() {
  const matches = useMediaQuery("(max-width:1220px)");

  return (
    <Container>
      {//MOBILE
        matches ?
          <>
            <ImgBox>
              <img src="images/007_esticada.png" />
            </ImgBox>
            <TextBox>
              <TextArea>
                <div className='ajusta-texto'>
                  <TypographyStyled>
                    007: SEM TEMPO
                  </TypographyStyled>
                  <TypographyStyled className='texto-fino'>
                    PARA PERDER
                  </TypographyStyled>
                </div>
                <div className='ajusta-texto'>
                  <TypographyStyled className='subtexto-fino'>
                    Até o Bond recomenda esse
                  </TypographyStyled>
                  <TypographyStyled className='subtexto'>
                    "Juninho".
                  </TypographyStyled>
                </div>
              </TextArea>
            </TextBox>
          </>
          :
          //DESKTOP
          <>
            <TextBox>
              <TextArea>
                <TypographyStyled className='ajuste-area'>
                  007: SEM TEMPO
                </TypographyStyled>
                <TypographyStyled className='texto-fino'>
                  PARA PERDER
                </TypographyStyled>
                <TypographyStyled className='subtexto-fino'>
                  Até o Bond recomenda esse
                </TypographyStyled>
                <TypographyStyled className='subtexto'>
                  "Juninho".
                </TypographyStyled>
              </TextArea>
            </TextBox>
            <ImgBox>
              <img src="images/007_quad.png" />
            </ImgBox>
          </>
      }
    </Container>
  )
}

export default ThirdSlide;