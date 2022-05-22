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
            <ButtonStyled>
              Contate Agora
            </ButtonStyled>
            <ul>
              <li><a href="#">QUEM SOU</a></li>
              <li><a href="#">HABILIDADES</a></li>
              <li><a href="#">PORQUE ME ESCOLHER</a></li>
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