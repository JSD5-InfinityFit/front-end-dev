import React from 'react';
import Navbar from './Navbar.jsx'

const Layout = ({children}) => {
    return (
        <div>
            <div className="desktop">
            <Navbar />
            </div>
            {children}
            <div className="mobiles">
            <Navbar/>
            </div>
        </div>
    )
}

export default Layout;