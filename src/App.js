import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FitnessGear from './Fitnessgear';
import About from './About';
import ContactUs from './ContactUs';
import ShopNow from './ShopNow';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FitnessGear/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/ShopNow" element={<ShopNow/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
