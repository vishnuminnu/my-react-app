import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import AboutUs from './pages/AboutUs.js';
import Services from './pages/Services.js';
import ServiceDetails from './pages/ServiceDetails.js';
import Products from './pages/Products.js';
import ProductDetails from './pages/ProductDetails.js';
import Certifications from './pages/Certifications.js';
import Gallery from './pages/Gallery.js';
import Careers from './pages/Careers.js';
import ContactUs from './pages/ContactUs.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </div>
      </Router>
   
  );
}

export default App;