import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('react-page')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);