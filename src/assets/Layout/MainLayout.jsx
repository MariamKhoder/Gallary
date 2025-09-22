import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from '../Components/Header'; 
import Home from '../pages/Home'; 
import Footer from '../Components/Footer'; 
import Gallery from '../pages/Gallary'; 
import Services from '../pages/Services'; 
import Contact from '../pages/Contact'; 
import About from '../pages/About'; 
import '../css/index.css';

export default function MainLayout() {
  return (
    <div className='main'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}