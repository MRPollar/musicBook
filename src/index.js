import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './sass/main.sass';
import App from './App';
import Home from './pages/Home';
import Albums from './pages/Albums';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route element={<App/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/albums" element={<Albums/>}/>
      </Route>
    </Routes>
  </Router>
);
