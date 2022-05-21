import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
  ContentLeft, Header, HeaderContent, ButtonStyled,
  ContentRight, IconButtonStyled
} from './styles.modules';

const abreModal = () => {
  console.log('Abre modal');
}

export function MenuHeader() {
  const matches = useMediaQuery("(max-width:905px)");

  return (
    <Header>
      <HeaderContent>
        {//DESKTOP
          !matches &&
          <>
            <ContentLeft>
              <img src="images/telecineLogo.svg" alt="TeleCine" width={"140px"} />
              <ul>
                <li><a href="#">QUEM SOU</a></li>
                <li><a href="#">HABILIDADES</a></li>
                <li><a href="#">PORQUE ME ESCOLHER</a></li>
              </ul>
            </ContentLeft>
            <ContentRight>
              <ButtonStyled
                variant="contained"
                color="primary"
                size="large"
              >
                Contate Agora
              </ButtonStyled>
            </ContentRight>
          </>
        }
        {//DESKTOP MEDIUM
          matches &&
          <>
            <ContentLeft>
              <IconButtonStyled 
                onClick={() => {abreModal()}}
              />
              <img src="images/telecineLogo.svg" alt="TeleCine" width={"140px"} />
            </ContentLeft>
            <ContentRight>
              <ButtonStyled
                variant="contained"
                color="primary"
                size="large"
              >
                Contate Agora
              </ButtonStyled>
            </ContentRight>
          </>
        }
      </HeaderContent>
    </Header>
  )
}

export default MenuHeader;