import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import {
  Container, TextBox, ImgBox, TextArea,
  TypographyStyled
} from './styles.modules';

export function SecondSlide() {
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
                  <img src="images/PoderosoChef_quad.png" alt='slide-2' />
                </>
                :
                <>
                  <img src="images/PoderosoChef_esticada.png" alt='slide-2' />
                </>
              }
            </ImgBox>
            <TextBox>
              <TextArea>
                <div className='ajusta-texto'>
                  <TypographyStyled className='texto-fino'>
                    O PODEROSO
                  </TypographyStyled>
                  <TypographyStyled>
                    JUNINHO:
                  </TypographyStyled>
                  <TypographyStyled className='texto-fino'>
                    NEGÓCIOS DA
                  </TypographyStyled>
                  <TypographyStyled>
                    FAMÍLIA
                  </TypographyStyled>
                </div>
                <div className='ajusta-texto'>
                  <TypographyStyled className='subtexto-fino'>
                    Você não vai acreditar no que
                    esse "Baby Dev" é capaz de fazer.
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
                <TypographyStyled>
                  O PODEROSO
                  JUNINHO:
                </TypographyStyled>
                <TypographyStyled className='texto-fino'>
                  NEGÓCIOS DA
                </TypographyStyled>
                <TypographyStyled className='texto-fino'>
                  FAMÍLIA
                </TypographyStyled>
                <TypographyStyled className='subtexto-fino'>
                  Você não vai acreditar no que
                  esse "Baby Dev" é capaz de fazer.
                </TypographyStyled>
              </TextArea>
            </TextBox>
            <ImgBox>
              <img src="images/PoderosoChef_quad.png" alt='slide-2' />
            </ImgBox>
          </>
      }
    </Container>
  )
}

export default SecondSlide;