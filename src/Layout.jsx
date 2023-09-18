import React from 'react';
import Navbar from './Navbar.jsx'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;