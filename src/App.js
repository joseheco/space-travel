import './scss/App.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Missionlist from './components/Missions';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/missions" element={<Missionlist />} />
      <Route path="/profile" />
    </Routes>
  </BrowserRouter>
);

export default App;
