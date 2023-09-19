import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar bg-base-100'>
            <a href={'/'}>Home</a>
            <a href={'/activity'}>Activity</a>
            <a href={'/setting'}>Setting</a>
            <a href={'/profile'}>Profile</a>
        </div>
    )
}

export default Navbar;