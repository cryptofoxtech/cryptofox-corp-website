import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the main App component
import './styles/custom.css'; // Import your custom CSS for global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);