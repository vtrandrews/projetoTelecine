import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
  ContentLeft, Header, HeaderContent, ButtonStyled,
  ContentRight
} from './styles.modules';
import MenuDrawer from '../MenuDrawer';

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
              <MenuDrawer />
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