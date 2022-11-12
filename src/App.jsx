//import { DiApple } from 'react-icons/di'; //Import icons
import React from 'react';
import './App.css'
//import Navbar from './components/navbar/Header'; // Import compoments
import { Navbar, Footer } from './components';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' />
      </Routes>
    </>
  )
}

export default App
