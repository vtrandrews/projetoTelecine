import React from 'react';
import {
  Container, Content, LeftBox, RightBox,
  AvatarStyled
} from './styles.modules';

export function SectionOne() {
  return (
    <Container>
      <Content id='section-one'>
        <LeftBox>
          <AvatarStyled>
            <img src="images/VitorAndrews.png" width={"350px"} alt='Perfil' />
          </AvatarStyled>
        </LeftBox>
        <RightBox>
          <div className='texto'>
            <p>
              Me chamo Vitor Andrews, tenho 22 anos, sou programador <strong>Full Stack</strong>,
              apaixonado por <strong>Front-End</strong>, amo o que faço e realmente trabalho porque gosto.
            </p>
            <p>
              Sou uma pessoa de fácil relacionamento interpessoal, me expresso muito bem,
              tenho raciocínio lógico, sou organizado, pontual, sei ser liderado, possuo boa
              apresentação e tenho interesse em cooperar para que a empresa alcance seus objetivos
              e se torne cada vez mais competitiva.
            </p>
          </div>
        </RightBox>
      </Content>
    </Container>
  )
}

export default SectionOne;