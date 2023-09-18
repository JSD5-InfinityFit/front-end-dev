import React from 'react';
import NavbarDT from './NavbarDT.jsx'
import NavbarMB from './NavbarMB.jsx'

const Layout = ({children}) => {
    return (
        <div>
            <div className="desktop"><NavbarDT /></div>
            {children}
            <div className="mobiles"><NavbarMB/></div>
        </div>
    )
}

export default Layout;