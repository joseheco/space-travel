import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from './img/planet.png';

const Navbar = () => (
  <nav>
    <NavLink className="brand" to="/">
      <img className="logo-img" alt="planet" src={planet} />
      <p>Space Traveler&apos;s Hub</p>
    </NavLink>
    <ul>
      <li>
        <NavLink className="nav-link" to="/">Rocket</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/missions">Missions</NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/profile">Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
