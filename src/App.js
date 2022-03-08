import './scss/App.scss';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import MissionsRender from './components/Missions';
import Missionlist from './components/Missionlist';

const App = () => (
  <BrowserRouter>
    <Header />
    <MissionsRender />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Missions" element={<Missionlist />} />
      <Route path="/profile" />
    </Routes>
  </BrowserRouter>
);

export default App;
