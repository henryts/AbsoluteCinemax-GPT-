import React from 'react'; 
import { createRoot } from 'react-dom/client';
import './index.css'; 
import App from './App.jsx';

// Initialize the React app by rendering the root component
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);