import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserPage from './UserPage.js';
import CloudsBG from './components/CloudsBG';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserPage />
    <App />
    <CloudsBG />
  </React.StrictMode>
);
