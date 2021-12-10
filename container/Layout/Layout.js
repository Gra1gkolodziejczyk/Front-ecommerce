import dynamic from 'next/dynamic'
import React from 'react'

const Header = dynamic(() => import('../Layout/Header/Header'));
const Footer = dynamic(() => import('../Layout/Footer/Footer'));

const Layout = () => {
    return (
        <>
            
        </>
    )
}

export default Layout
