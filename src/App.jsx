//import { DiApple } from 'react-icons/di'; //Import icons
import React from 'react';
import './App.css'
//import Navbar from './components/navbar/Header'; // Import compoments
import { Navbar, Footer, Home, Ueberuns, Services, Portfolio, Kontakt } from './components';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Ueberuns' element={<Ueberuns />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Kontakt' element={<Kontakt />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
