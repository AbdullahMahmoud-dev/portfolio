import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Assuming this is your global stylesheet file
import App from './App.jsx';

// Get the root DOM element
const rootElement = document.getElementById('root');

// Create the root and render the application
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);