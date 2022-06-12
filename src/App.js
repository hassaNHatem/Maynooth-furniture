import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './mainstyles.css'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <Products></Products>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
