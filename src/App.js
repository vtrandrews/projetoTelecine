import './App.css';
import GlobalStyle from './css/globalStyles';
import MenuHeader from './components/MenuHeader';
import CarouselComponent from './components/Carousel';
import { SectionOne, SectionTwo, SectionThree } from './components/Sections/index';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MenuHeader />
      <CarouselComponent />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default App;
