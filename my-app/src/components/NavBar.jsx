import React from 'react'
import {Link} from 'react-router-dom'
import Pokeball from '../Images/pokeball_logo.png'




function NavBar() {
    return (
        <div>
            <div className='navBar'>
                <div className='leftNav'>
                    <img className='pokeballIMG' src={Pokeball} alt='pokeball'/>
                    <a href='#'>Home</a>
                </div>
                <div className='rightNav'>
                    <a href='#'>Sign Up</a>
                    <a href='#'>Login</a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;

