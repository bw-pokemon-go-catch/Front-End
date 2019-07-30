import React from "react";

import Pokeball from "../Images/pokeball_logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="navBar">
        <div className="leftNav">
          <img className="pokeballIMG" src={Pokeball} alt="pokeball" />
          <Link to="/">Home</Link>
        </div>
        <div className="rightNav">
          <Link to="/signup/">Sign Up</Link>
          <Link to="/login/">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
