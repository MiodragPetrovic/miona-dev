import { DiApple } from 'react-icons/di'; //Import icons
import React from 'react';
import './App.css'
//import Navbar from './components/navbar/Header'; // Import compoments
import { Navbar, Footer } from './components';

const App = () => {
  return (
    <div>
      <DiApple />
      <Navbar />
      <Footer />
    </div>
  )
}

export default App
