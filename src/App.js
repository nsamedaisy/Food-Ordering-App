import React, { useState } from 'react';
import './index.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Contact from './components/Contact';
// import { CartProvider } from 'react-use-cart';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';

function App() {
  // const [productionData, setProductionData] = useState({})

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/:id/details' element={<Details />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
