import React from 'react'; // Importing React library for building UI components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing components for routing
import Navbar from './components/Navbar'; // Importing Navbar component for site navigation
import IntroSection from './components/IntroSection'; // Importing IntroSection component for the introduction section
import AboutSection from './components/AboutSection'; // Importing AboutSection component for the about section
import FeaturesSection from './components/FeaturesSection'; // Importing FeaturesSection component for the features overview
import OurStorySection from './components/OurStorySection'; // Importing OurStorySection component for the story behind the project
import ContactSection from './components/ContactSection'; // Importing ContactSection component for the contact information
import FeaturesPage from './components/FeaturesPage'; // Importing FeaturesPage component for detailed features
import SignIn from './components/SignIn'; // Importing SignIn component for user authentication
import SignUp from './components/SignUp'; // Importing SignUp component for user registration
import Demo from './components/Demo'; // Importing Demo component for showcasing the app
import Footer from './components/Footer'; // Importing Footer component for site footer
import './App.css'; // Importing global CSS for styling

function App() {
  return (
    <Router> {/* Wrap the app in Router for handling routing */}
      <div className="app-container">
        <Navbar /> {/* Render the Navbar component at the top of the page */}
        <div className="main-content">
          <Routes>
            {/* Define routes for the application */}
            <Route path="/" element={
              <>
                {/* Render the main sections on the home page */}
                <IntroSection /> {/* Introduction section */}
                <AboutSection /> {/* About section */}
                <FeaturesSection /> {/* Features overview section */}
                <OurStorySection /> {/* Story behind the project */}
                <ContactSection /> {/* Contact information section */}
              </>
            } />
            <Route path="/signin" element={<SignIn />} /> {/* Route for the SignIn page */}
            <Route path="/signup" element={<SignUp />} /> {/* Route for the SignUp page */}
            <Route path="/demo" element={<Demo />} /> {/* Route for the Demo page */}
            <Route path="/features" element={<FeaturesPage />} /> {/* Route for the FeaturesPage */}
          </Routes>
        </div>
        <Footer /> {/* Render the Footer component at the bottom of the page */}
      </div>
    </Router>
  );
}

export default App; // Export the App component for use in other parts of the application
