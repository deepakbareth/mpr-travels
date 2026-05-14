import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Home from './Components/Pages/Home.jsx';
import DubaiPage from './Components/Pages/Destinations/Dubaipage.jsx';
import SaudiPage from './Components/Pages/Destinations/SaudiPage.jsx';
import ParisPage from './Components/Pages/Destinations/ParisPage.jsx';
import LondonPage from './Components/Pages/Destinations/LondonPage.jsx';
import BarcelonaPage from './Components/Pages/Destinations/BarcelonaPage.jsx';
import HongkongPage from './Components/Pages/Destinations/HongkongPage.jsx';
import JapanPage from './Components/Pages/Destinations/JapanPage.jsx';
import BestOfEuropePage from './Components/Pages/Destinations/BestOfEuropePage.jsx';
import SeoulPage from './Components/Pages/Destinations/SeoulPage.jsx';
import RomePage from './Components/Pages/Destinations/RomePage.jsx';
import LasVegasPage from './Components/Pages/Destinations/LasVegasPage.jsx';
import HawaiiPage from './Components/Pages/Destinations/HawaiiPage.jsx';



function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <Routes>
        <Route path="/mprtravels/" element={<Home />} />
        <Route path="/mprtravels/destinations/dubai" element={<DubaiPage />} />
        <Route path="/mprtravels/destinations/saudi" element={<SaudiPage />} />
        <Route path="/mprtravels/destinations/london" element={<LondonPage />} />
        <Route path="/mprtravels/destinations/paris" element={<ParisPage />} />
        <Route path="/mprtravels/destinations/barcelona" element={<BarcelonaPage />} />
        <Route path="/mprtravels/destinations/hongkong" element={<HongkongPage />} />
        <Route path="/mprtravels/destinations/japan" element={<JapanPage />} />
        <Route path="/mprtravels/destinations/best-of-europe" element={<BestOfEuropePage />} />
        <Route path="/mprtravels/destinations/seoul" element={<SeoulPage />} />
        <Route path="/mprtravels/destinations/rome" element={<RomePage />} />
        <Route path="/mprtravels/destinations/las-vegas" element={<LasVegasPage />} />
        <Route path="/mprtravels/destinations/hawaii" element={<HawaiiPage />} />



      </Routes>
      <Footer />
    </div>
  );
}

export default App;