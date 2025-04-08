import React from 'react';
import ReactDOM from 'react-dom/client';
import App1 from './App1.js';
import App2 from './App2.js';
import App5 from './App5.js';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App3 from './App3.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>work-shop</h1>} />
        <Route path="/app1" element={<App1 />} />
        <Route path='/app2' element={<App2 />} />
        <Route path='/app3' element={<App3 />} />
        <Route path="/app5" element={<App5 />} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
