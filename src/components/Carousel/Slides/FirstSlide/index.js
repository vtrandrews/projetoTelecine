import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import {
  Container, TextBox, ImgBox, TextArea,
  TypographySyled
} from './styles.modules';

export function FirstSlide() {
  const matches = useMediaQuery("(max-width:1220px)");

  return (
    <Container>
      {
        matches ?
          <>
            <ImgBox>
              <img src="images/Toretto_esticada.png" />
            </ImgBox>
            <TextBox>
              <TextArea>
                <TypographySyled className='texto-fino'>
                  MENOS TEMPO PROCURANDO, VOCÊ JÁ ACHOU BEM AQUI
                </TypographySyled>
                <TypographySyled className='texto-fino'>
                  Perfil escolhido por um time de especialistas em recrutamento
                </TypographySyled>
              </TextArea>
            </TextBox>
          </>
          :
          <>
            <TextBox>
              <TextArea>
                <TypographySyled className='texto-fino'>
                  MENOS TEMPO
                </TypographySyled>
                <TypographySyled>
                  PROCURANDO,
                </TypographySyled>
                <TypographySyled className='texto-fino'>
                  VOCÊ JÁ ACHOU
                </TypographySyled>
                <TypographySyled>
                  BEM AQUI
                </TypographySyled>
                <TypographySyled className='subtexto-fino'>
                  Perfil escolhido por um time de
                </TypographySyled>
                <TypographySyled className='subtexto'>
                  especialistas em recrutamento
                </TypographySyled>
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