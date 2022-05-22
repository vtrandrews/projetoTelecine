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
            <img src="images/VitorAndrews.png" width={"350px"} />
          </AvatarStyled>
        </LeftBox>
        <RightBox>
          <div className='titulo'>
            <h1>Sobre Mim</h1>
          </div>
          <div className='sub-titulo'>
            <h1>Sobre Mim</h1>
          </div>
        </RightBox>
      </Content>
    </Container>
  )
}

export default SectionOne;