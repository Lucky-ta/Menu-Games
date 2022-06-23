import React from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import Home from '../pages/Home';
import JogoDaVelha from '../pages/JogoDaVelha';
import Jokenpo from '../pages/Jokenpo';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/JogoDaVelha" element={<JogoDaVelha />} />
        <Route path="/Jokenpo" element={<Jokenpo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
