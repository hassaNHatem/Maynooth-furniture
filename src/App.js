import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Products from './components/Products';
import './mainstyles.css'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <Products></Products>
    </div>
  );
}

export default App;
