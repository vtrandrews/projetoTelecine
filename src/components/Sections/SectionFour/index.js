import React from 'react';
import {
  Container, Content, CentralBox,
  TextBox, TechBox, TechBoxItem
} from './styles.modules';

export function SectionFour() {
  return (
    <Container>
      <Content id='section-two'>
        <CentralBox>
          <TextBox>
            <h1>Tecnologias utilizadas para desenvolver este projeto</h1>
          </TextBox>
          <TechBox>
            <div className='alinha-techs'>
              <TechBoxItem>
                <img src='https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png' alt='react' />
                <p>ReactJS</p>
              </TechBoxItem>
              <TechBoxItem>
                <img src='https://cdn.worldvectorlogo.com/logos/npm-square-red-1.svg' alt='npm' />
                <p>NPM</p>
              </TechBoxItem>
              <TechBoxItem>
                <img src='https://avatars.githubusercontent.com/u/20658825?s=200&v=4' alt='Styled-Components' />
                <p>Styled-Components</p>
              </TechBoxItem>
            </div>
            <div className='alinha-techs'>
              <TechBoxItem>
                <img src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' alt='GitHub' />
                <p>Git</p>
              </TechBoxItem>
              <TechBoxItem>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png' alt='JavaScript' />
                <p>JavaScript</p>
              </TechBoxItem>
              <TechBoxItem>
                <img src='https://v4.mui.com/static/logo.png' alt='Material UI' />
                <p>Material UI</p>
              </TechBoxItem>
            </div>
          </TechBox>
        </CentralBox>
      </Content>
    </Container>
  )
}

export default SectionFour;