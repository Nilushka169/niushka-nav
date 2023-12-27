import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="logo">
        <img src="./logo.png" alt="" />
        <h2>
          PURE<span>-X</span>
        </h2>
      </div>
      <div className="navbarLinks">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Our Projects</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
