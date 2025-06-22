// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import Tailwind CSS styles
import './index.css';

// Import App component
import App from './App.jsx';

// Import ToastContainer from react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Toastify's CSS

// Mount React App to the #root div in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer />  {/* Enables toast notifications globally */}
  </StrictMode>
);
