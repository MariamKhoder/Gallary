
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './assets/Layout/MainLayout'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </React.StrictMode>
);
