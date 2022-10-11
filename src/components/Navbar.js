import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [showBurger, setShowBurger] = useState(false);

  const handleClick = () => {
    setShowBurger(!showBurger);
  };
  return (
    <nav className={`nvbr ${showBurger ? "show-links" : ""}`}>
      <div className="nvbr-logo">Logo</div>
      <ul className="nvbr-links">
        <li className="nvbr-item">
          <a href="/" className="nvbr-link">
            Link 1
          </a>
        </li>
        <li className="nvbr-item">
          <a href="/" className="nvbr-link">
            Link 2
          </a>
        </li>
        <li className="nvbr-item">
          <a href="/" className="nvbr-link">
            Link 3
          </a>
        </li>
        <li className="nvbr-item">
          <a href="/" className="nvbr-link">
            Link 4
          </a>
        </li>
      </ul>
      <div className="nvbr-burger" onClick={handleClick}>
        <span className="burger-bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
