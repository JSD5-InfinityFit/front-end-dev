import React from 'react';
import './Navbar.css'
import inifityLogo from "../assets/icons/infinity.png";

const NavbarDT = () => {
    return (
        <div className="navbar">
            <button className="bg-indigo-900 rounded-none"><a href={'/'}><img src={inifityLogo} style={{display:'inline'}} className="icons" alt="inftyFit Logo" />Infinity Fit</a></button>
           
            <button className="bg-indigo-900 rounded-none"><a href={'/dashboard'}>Dashboard</a></button> 
            <button className="bg-indigo-900 rounded-none"><a href={'/activity'}>Activity</a></button>
            <button className="bg-indigo-900 rounded-none"><a href={'/profile'}>Profile</a></button>
        </div>
    )
}

export default NavbarDT;