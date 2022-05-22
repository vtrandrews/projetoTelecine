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
              <a href='/'>
                <img src="images/telecineLogo.svg" alt="TeleCine" width={"140px"} />
              </a>
              <ul>
                <li><a href="/#section-one">QUEM SOU</a></li>
                <li><a href="/#section-two">HABILIDADES</a></li>
                <li><a href="/#section-three">PORQUE ME ESCOLHER</a></li>
              </ul>
            </ContentLeft>
            <ContentRight>
              <ButtonStyled
                variant="contained"
                color="primary"
                size="large"
                href='https://www.linkedin.com/in/vitor-andrews-246524181/'
                target="_blank"
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
                href='https://www.linkedin.com/in/vitor-andrews-246524181/'
                target="_blank"
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