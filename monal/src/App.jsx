import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './About';
import Sign from './Sign';
import Contact from './Contact';
import Home from './Home';
import Single from './Single';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    { <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<Sign />} /> 
      <Route exact path="/menu" element={<Single />} />
    </Routes> }
  </BrowserRouter>
  )
}

export default App;
