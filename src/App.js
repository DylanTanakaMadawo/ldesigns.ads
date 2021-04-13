import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Catalogue from './comps/Catalogue/Catalogue';
import FloaterButton from './comps/FloaterButton/FloaterButton';
import Footer from './comps/Footer/Footer';
import Hero from './comps/Hero/Hero';
import Navbar from './comps/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Hero />
          <Catalogue />
          <Footer />
          <FloaterButton />
      </Router>
    </div>
  );
}

export default App;
