import React, { FC } from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout: FC<React.ReactNode> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default Layout
