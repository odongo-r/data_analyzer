import React, { useState } from 'react';
import CSVUploader from './CSVUploader';
import VisualizationSelector from './VisualizationSelector';
import './FeaturesPage.css';

const FeaturesPage = () => {
  const [data, setData] = useState([]);

  return (
    <div className="features-page">
      <header className="features-header">
        <h1>Features</h1>
        <p>Explore the various features and analyses our app can perform</p>
      </header>
      <section className="feature-section">
        <h2>Upload CSV Dataset</h2>
        <CSVUploader onFileLoaded={(parsedData) => {
          console.log('Data loaded in FeaturesPage:', parsedData); // Debugging line
          setData(parsedData);
        }} />
      </section>
      <section className="feature-section">
        <h2>Choose Visualization</h2>
        {data.length > 0 ? (
          <VisualizationSelector data={data} />
        ) : (
          <p>Please upload a CSV file to see the visualizations.</p>
        )}
      </section>
    </div>
  );
};

export default FeaturesPage;
