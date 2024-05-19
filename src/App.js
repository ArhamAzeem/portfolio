import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatePresence>
        <RoutesWithAnimation />
      </AnimatePresence>
    </BrowserRouter>
  );
}

function RoutesWithAnimation() {
  const location = useLocation(); // Importing useLocation here

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/Project' element={<Projects />} />
      <Route path='/Skills' element={<Skills />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
  )
}

export default App;
