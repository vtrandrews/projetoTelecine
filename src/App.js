import './App.css';
import GlobalStyle from './css/globalStyles';
import MenuHeader from './components/MenuHeader';
import CarouselComponent from './components/Carousel';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MenuHeader />
      <CarouselComponent />
    </div>
  );
}

export default App;
