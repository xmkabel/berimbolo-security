import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Header from './components/Header/Header'; 
import Features from './components/Features/Features';
import ProductSection from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Router>
      <Header/>
      <Features/>
      <ProductSection/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
