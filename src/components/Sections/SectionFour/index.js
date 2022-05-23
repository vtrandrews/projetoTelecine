import React from 'react';
import {
  Container, Content, CentralBox,
  TextBox, TechBox, TechBoxItem
} from './styles.modules';

export function SectionFour() {
  return (
    <Container>
      <Content id='section-four'>
        <CentralBox>
          <TextBox>
            <h1>Outras tecnologias que possuo experiência</h1>
          </TextBox>
          <TechBox>
            <div className='alinha-techs'>
              <TechBoxItem>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png' alt='Angular' />
                <p>AngularJS</p>
              </TechBoxItem>
              <TechBoxItem>
                <img src='https://seeklogo.com/images/Y/yarn-logo-F5E7A65FA2-seeklogo.com.png' alt='yarn' />
                <p>Yarn</p>
              </TechBoxItem>
              <TechBoxItem>
                <img src='https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png' alt='SASS' />
                <p>SASS</p>
              </TechBoxItem>
            </div>
            <div className='alinha-techs'>
              <TechBoxItem>
                <img src='https://res.cloudinary.com/hevo/images/w_225,h_225,c_fill/f_auto,q_auto/v1634116436/hevo-learn/GitLab-logo/GitLab-logo.png?_i=AA' alt='GitLab' />
                <p>GitLab</p>
              </TechBoxItem>
              <TechBoxItem>
                <img src='https://cdn.worldvectorlogo.com/logos/typescript-2.svg' alt='TypeScript' />
                <p>TypeScript</p>
              </TechBoxItem>
              <TechBoxItem>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxkaq7mOTOVYdCtsLufQn2J29U1nf2V505Q&usqp=CAU' alt='Bootstrap' />
                <p>Bootstrap</p>
              </TechBoxItem>
            </div>
          </TechBox>
        </CentralBox>
      </Content>
    </Container>
  )
}

export default SectionFour;