import React from 'react';
import { Link } from 'react-router-dom';
import './IntroSection.css';

const IntroSection = () => {
  return (
    <section id="intro" className="intro">
      <div className="intro-content">
        <h1>Data Analyzer</h1>
        <p>Your ultimate companion for exploring, analyzing, and visualizing data.</p>
        <Link to="/features" className="btn">Try the Demo</Link>
      </div>
    </section>
  );
};

export default IntroSection;

