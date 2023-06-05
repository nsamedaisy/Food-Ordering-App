import React, { useState } from 'react';
import './index.css';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Contact from './components/Contact';
import Payment from './components/Payment';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Routes, Route, NavLink, Link, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/:id/details' element={<Details />} />
        <Route path='/:id/contact' element={<Contact />} />
        <Route path='/:id/payment' element={<Payment />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
