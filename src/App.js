import React, { useState } from 'react';
import './index.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Contact from './components/Contact';
import Payment from './components/Payment';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/:id/details' element={<Details />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
