import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="div1">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="div2">
        <ul className="best-dishes">
          <li>
            <Link to="/Best-Dishes">Best Dishes</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="recipes">
          <li>
            <Link to="/Recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/Search">Search</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
