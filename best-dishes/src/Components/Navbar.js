import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUtensils, faSearch } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand active" to="/">
          <FontAwesomeIcon icon="home" /> Home
        </Link>

        <h1>BEST DISHES</h1>
        
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/Recipes">
              <FontAwesomeIcon icon="utensils" /> Recipes
            </Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="/Search">
              <FontAwesomeIcon icon="search" /> Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

