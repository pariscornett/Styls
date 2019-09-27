import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="navbar-brand">Styl</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
          <div className="nav-link" to="/">
        Search
        </div>
      </li>
      <li className="nav-item">
          <div className="nav-link" to="/saved">
        Saved
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar;