import './App.css';
import GlobalStyle from './css/globalStyles';
import MenuHeader from './components/MenuHeader';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MenuHeader />
      <Carousel />
    </div>
  );
}

export default App;
