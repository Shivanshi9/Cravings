import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
<>
    <BrowserRouter>
    <Header />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
    
</>
  )
}

export default App