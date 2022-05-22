import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import {
  Container, TextBox, ImgBox, TextArea,
  TypographyStyled  
} from './styles.modules';

export function FirstSlide() {
  const matches = useMediaQuery("(max-width:1220px)");

  return (
    <Container>
      {//MOBILE
        matches ?
          <>
            <ImgBox>
              <img src="images/Toretto_esticada.png" />
            </ImgBox>
            <TextBox>
              <TextArea>
                <div className='ajusta-texto'>
                  <TypographyStyled className='texto-fino'>
                    MENOS TEMPO
                  </TypographyStyled>
                  <TypographyStyled>
                    PROCURANDO,
                  </TypographyStyled>
                  <TypographyStyled className='texto-fino'>
                    VOCÊ JÁ ACHOU
                  </TypographyStyled>
                  <TypographyStyled>
                    BEM AQUI
                  </TypographyStyled>
                </div>
                <div className='ajusta-texto'>
                  <TypographyStyled className='subtexto-fino'>
                    Perfil escolhido por um time de
                  </TypographyStyled>
                  <TypographyStyled className='subtexto'>
                    especialistas em recrutamento
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
                <TypographyStyled className='texto-fino'>
                  MENOS TEMPO
                </TypographyStyled>
                <TypographyStyled>
                  PROCURANDO,
                </TypographyStyled>
                <TypographyStyled className='texto-fino'>
                  VOCÊ JÁ ACHOU
                </TypographyStyled>
                <TypographyStyled>
                  BEM AQUI
                </TypographyStyled>
                <TypographyStyled className='subtexto-fino'>
                  Perfil escolhido por um time de
                </TypographyStyled>
                <TypographyStyled className='subtexto'>
                  especialistas em recrutamento
                </TypographyStyled>
              </TextArea>
            </TextBox>
            <ImgBox>
              <img src="images/Toretto_quad.png" />
            </ImgBox>
          </>
      }
    </Container>
  )
}

export default FirstSlide;