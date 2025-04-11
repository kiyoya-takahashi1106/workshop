import React from 'react';
import ReactDOM from 'react-dom/client';
import App0 from './App0.js';
import App1 from './App1.js';
import App2 from './App2.js';
import App3 from './App3.js';
import App4 from './App4.js';
import App5 from './App5.js';
import App6 from './App6.js';
import reportWebVitals from './reportWebVitals.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App0 />} />
        <Route path="/app1" element={<App1 />} />
        <Route path='/app2' element={<App2 />} />
        <Route path='/app3' element={<App3 />} />
        <Route path='/app4' element={<App4 />} />
        <Route path="/app5" element={<App5 />} />
        <Route path="/app6" element={<App6 />} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
