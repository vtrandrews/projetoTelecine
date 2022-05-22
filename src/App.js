import './App.css';
import GlobalStyle from './css/globalStyles';
import MenuHeader from './components/MenuHeader';
import CarouselComponent from './components/Carousel';
import { SectionOne, SectionTwo, SectionThree, SectionFour } from './components/Sections/index';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MenuHeader />
      <CarouselComponent />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
}

export default App;
