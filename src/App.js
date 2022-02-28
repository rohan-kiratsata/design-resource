// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
    </>
  );
}

export default App;
