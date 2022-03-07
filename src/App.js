import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" />
      <Route path="/missions" />
      <Route path="/profile" />
    </Routes>
  </BrowserRouter>
);

export default App;
