import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataProvider } from './GlobalState';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </DataProvider>
);

reportWebVitals();
