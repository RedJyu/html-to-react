import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tours from './components/Tours';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tours />
      <Services />
      <Footer />
    </>
  );
}

export default App;
