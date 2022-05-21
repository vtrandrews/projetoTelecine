import React from 'react';
import {
  Container
} from './styles.modules';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import FirstSlide from './Slides/FirstSlide';
import SecondSlide from './Slides/SecondSlide';
import ThirdSlide from './Slides/ThirdSlide';

export function CarouselComponent() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <FirstSlide />
        </Carousel.Item>
        <Carousel.Item>
          <SecondSlide />
        </Carousel.Item>
        <Carousel.Item>
          <ThirdSlide />
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default CarouselComponent;