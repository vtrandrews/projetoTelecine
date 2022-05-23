import React from 'react';
import {
  Container, BoxMenu, IconButtonStyled,
  MenuLateral, FundoDrawer, ButtonStyled,
  LabelFechaDrawer
} from './styles.modules';

export function MenuDrawer() {
  const [open, setOpen] = React.useState(false);

  const abreDrawer = () => {
    setOpen(true);
  }

  const fechaDrawer = () => {
    setOpen(false);
  }

  if (open === true) {
    return (
      <>
        <MenuLateral>
          <BoxMenu>
            <LabelFechaDrawer onClick={fechaDrawer}>
              X
            </LabelFechaDrawer>
            <ButtonStyled
              href='https://www.linkedin.com/in/vitor-andrews-246524181/'
              target="_blank"              
            >
              Contate Agora
            </ButtonStyled>
            <ul>
              <li><a href="#section-one" onClick={fechaDrawer}>QUEM SOU</a></li>
              <li><a href="#section-two" onClick={fechaDrawer}>TECNOLOGIAS</a></li>
              <li><a href="#section-four" onClick={fechaDrawer}>PORQUE ME ESCOLHER</a></li>
            </ul>
          </BoxMenu>
        </MenuLateral>
        <FundoDrawer
          onClick={fechaDrawer}
        />
      </>
    )
  }

  return (
    <Container>
      <IconButtonStyled
        onClick={abreDrawer}
      />
    </Container>
  )
}

export default MenuDrawer;