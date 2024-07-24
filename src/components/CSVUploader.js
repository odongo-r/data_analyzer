import React from 'react';
import Papa from 'papaparse';

const CSVUploader = ({ onFileLoaded }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        console.log('Parsed CSV data:', results.data); // Debugging line
        onFileLoaded(results.data);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error); // Debugging line
      }
    });
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default CSVUploader;
