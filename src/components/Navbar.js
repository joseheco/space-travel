import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <NavLink to="/">Space-Travel</NavLink>
      <ul>
        <li>
          <NavLink to="/">Rocket</NavLink>
        </li>
        <li>
          <NavLink to="/missions">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
