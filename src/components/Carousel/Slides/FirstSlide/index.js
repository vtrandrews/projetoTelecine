import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import {
  Container, TextBox, ImgBox, TextArea,
  TypographyStyled  
} from './styles.modules';

export function FirstSlide() {
  const matches = useMediaQuery("(max-width:1220px)");
  const imageMatch = useMediaQuery("(max-width:600px)");

  return (
    <Container>
      {//MOBILE
        matches ?
          <>
            <ImgBox>
              { imageMatch ?
                <>
                  <img src="images/Toretto_quad.png" alt='slide-1' />
                </>
                :
                <>
                  <img src="images/Toretto_esticada.png" alt='slide-1' />
                </>
              }
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
              <img src="images/Toretto_quad.png" alt='slide-1' />
            </ImgBox>
          </>
      }
    </Container>
  )
}

export default FirstSlide;