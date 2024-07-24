import React from 'react';
import './FeaturesSection.css';

// Import images directly
import feature1 from './images/feature1.png';
import feature2 from './images/feature2.png';
import feature3 from './images/feature3.png';

function FeaturesSection() {
  return (
    <section id="features">
      <h2>Features</h2>
      <div className="features-content">
        <div className="feature">
          <img src={feature1} alt="Feature 1" />
          <h3>Graph Analysis</h3>
          <p>Visualize your data with interactive graphs.</p>
        </div>
        <div className="feature">
          <img src={feature2} alt="Feature 2" />
          <h3>EDA Analysis</h3>
          <p>Perform exploratory data analysis with ease.</p>
        </div>
        <div className="feature">
          <img src={feature3} alt="Feature 3" />
          <h3>Custom Reports</h3>
          <p>Generate comprehensive reports tailored to your needs.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
