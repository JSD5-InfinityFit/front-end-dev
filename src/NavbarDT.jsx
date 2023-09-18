import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <button className="rounded-none bg-indigo-900"><a href={'/'}>Infinity Fit</a></button>
            <button className="rounded-none bg-indigo-900"><a href={'/activity'}>Activity</a></button>
            <button className="rounded-none bg-indigo-900"><a href={'/setting'}>Setting</a></button>
            <button className="rounded-none bg-indigo-900"><a href={'/profile'}>Profile</a></button>
        </div>
    )
}

export default Navbar;