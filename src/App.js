import Quote from './components/Quote.jsx';
import Footer from './components/Footer.jsx';
// import PictCarousel from './components/PictCarousel.jsx';
import About from './components/About.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import Grid from './components/Grid.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroBanner/>
      <About/>
      <Quote/>
      <Grid/>
      {/* <PictCarousel/> */}
      <Footer/>
    </div>
  );
}

export default App;
