import React from 'react'

import Pokeball from '../Images/pokeball_logo.png'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from './login';
import App from '../App'
import SignupPage from './signup'




function NavBar() {
    return (
        <Router>
        <div>
            <div className='navBar'>
                <div className='leftNav'>
                    <img className='pokeballIMG' src={Pokeball} alt='pokeball'/>
                    <Link to='/'>Home</Link>
                </div>
                <div className='rightNav'>
                    <Link to='/signup/'>Sign Up</Link>
                    <Link to='/login/'>Login</Link>
                </div>
            </div>
            <Route path="/" exact component={App} />
        <Route path="/signup/" component={SignupPage} />
        <Route path="/login/" component={LoginPage} />
        </div>
        </Router>
    )
}

export default NavBar;

