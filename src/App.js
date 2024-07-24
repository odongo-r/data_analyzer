import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import OurStorySection from './components/OurStorySection';
import ContactSection from './components/ContactSection';
import FeaturesPage from './components/FeaturesPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Demo from './components/Demo';
import Footer from './components/Footer'; // Import Footer component
import './App.css'; // Import App CSS for global styling

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <IntroSection />
                <AboutSection />
                <FeaturesSection />
                <OurStorySection />
                <ContactSection />
              </>
            } />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/features" element={<FeaturesPage />} />
          </Routes>
        </div>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
}

export default App;
