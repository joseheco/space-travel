import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Missions from './components/Missions'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" />
      <Route path="/missions" element={<Missions/>} />
      <Route path="/profile" />
    </Routes>
  </BrowserRouter>
);

export default App;
