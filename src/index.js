// Import necessary libraries and components
import React from 'react'; // Import React to use JSX and React features
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering the React app
import './index.css'; // Import global CSS styles
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Import the function for measuring app performance

// Create a root element where the React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    {/* StrictMode helps with identifying potential problems in the application */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // Function call to measure and report performance metrics
