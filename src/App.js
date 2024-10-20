import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import MobileAppDevelopment from './pages/MobileAppDevelopment';
import AndroidAppDevelopment from './pages/AndroidAppDevelopment';
import MobileGameDevelopment from './pages/MobileGameDevelopment';
import AIMLDevelopment from './pages/AIMLDevelopment';
import IPhoneDevelopment from './pages/iPhoneDevelopment';
import CrossPlateformMobileDevelopment from './pages/CrossPlateformMobileDevelopment';
import IoTAppDevelopment from './pages/IoTAppDevelopment';
import MetavarseDevelopment from './pages/MetavarseDevelopment';
import Technology from './pages/Technology';
// import Portfoliopage from './pages/Portfoliopage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/service/*" element={<Service />} />
        <Route path='/service/mobileappdevelopmentservice' element={<MobileAppDevelopment />} />
        <Route path='/servicean/androindappdevelopmentservice' element={<AndroidAppDevelopment />} />
        <Route path='/service/mobilegameappdevelopmentservice' element={<MobileGameDevelopment />} />
        <Route path='/service/ai-mldevelopmentservice' element={<AIMLDevelopment />} />
        <Route path='/service/iphoneappdevelopmentservice' element={<IPhoneDevelopment />} />
        <Route path='/service/crossmobileappdevelopmentservice' element={<CrossPlateformMobileDevelopment />} />
        <Route path='/service/iotappmobiledevelopmentservice' element={<IoTAppDevelopment />} />
        <Route path='/service/metavarsedevelopmentservice' element={<MetavarseDevelopment />} />
        <Route path="/technology/*" element={<Technology />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
