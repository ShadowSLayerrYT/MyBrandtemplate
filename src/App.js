import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase'; 
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <ProductShowcase /> 
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
