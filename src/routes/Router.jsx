import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Home from '../pages/Home';
import JogoDaVelha from '../pages/JogoDaVelha';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/JogoDaVelha" element={<JogoDaVelha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
