import React from 'react';
import {
  Container, Content
} from './styles.modules';

export function SectionFive() {
  return (
    <Container>
      <Content id='section-five'>
        <h1>Qual é o meu diferencial?</h1>
        <p>
          Sempre tento resolver problemas de forma criativa e inovadora, adoro aprender e compartilhar conhecimento,
          acredito que tenho muito a oferecer ao time, sou um desenvolvedor completo e proativo,
          estou aqui para evoluir e aprimorar minhas habilidades, estou em um ótimo momento e com bastante energia.
        </p>

        <h6>
          "Mais do que de máquinas, precisamos de humanidade.
          Mais do que de inteligência, precisamos de afeição
          e doçura. Sem essas virtudes, a vida será de violência
          e tudo será perdido.”
        </h6>
        <h6 className='last-child'>
          (Charles Chaplin)
        </h6>
      </Content>
    </Container>
  )
}

export default SectionFive;