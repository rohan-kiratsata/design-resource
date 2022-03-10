
import './App.css';
// Components Import
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
// Pages Component
import Home from './components/pages/Home';
import All from './components/pages/All';
import Blogs from './components/pages/Blogs';
import ColorTools from './components/pages/ColorTools';
import DesignSystems from './components/pages/DesignSystems';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/all" element={<All />} />
          <Route path="/colorTools" element={<ColorTools />} />
          <Route path="/designSystems" element={<DesignSystems />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
