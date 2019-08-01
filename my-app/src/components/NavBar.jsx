import React from "react";

import Pokeball from "../Images/pokeball_logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="navBar">
        <div className="leftNav">
          <Link to="/"><img className="pokeballIMG" src={Pokeball} alt="pokeball" /></Link>
          <Link to="/">Home</Link>
        </div>
        <div className="rightNav">
          <a href="https://worthymonadmin.netlify.com/register">Sign Up</a>
          <a href="https://worthymonadmin.netlify.com/login">Login</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
