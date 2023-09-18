import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <button><a href={'/'}>Home</a></button>
            <button><a href={'/activity'}>Activity</a></button>
            <button><a href={'/setting'}>Setting</a></button>
            <button><a href={'/profile'}>Profile</a></button>
        </div>
    )
}

export default Navbar;