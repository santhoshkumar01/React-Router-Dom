import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink state='Nikhil reddy' to='/'>
                    <img style={{ height: 50, width: 50, borderRadius: 5 }} src={'https://w7.pngwing.com/pngs/352/708/png-transparent-logo-s-miscellaneous-blue-angle.png'} alt='logo' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/books' activeStyle>Books List</NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink to='/contact' activeStyle>Contact</NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink to='/about' activeStyle>About</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar