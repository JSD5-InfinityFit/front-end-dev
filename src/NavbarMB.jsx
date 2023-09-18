import React from 'react';
import homeLogo from './assets/icons/home.svg'
import gearLogo from './assets/icons/gear.svg'
import profileLogo from './assets/icons/profile.svg'
import screenLogo from './assets/icons/screen.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <a href={'/'}><img src={homeLogo} className="icons" alt="home logo" /></a>
            <a href={'/activity'}><img src={screenLogo} className="icons" alt="activity logo" /></a>
            <a href={'/setting'}><img src={gearLogo} className="icons" alt="setting logo" /></a>
            <a href={'/profile'}><img src={profileLogo} className="icons" alt="profile logo" /></a>
        </div>
    )
}

export default Navbar;