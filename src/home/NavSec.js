import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap'

const NavSec = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [scrolled, setScrolled] = useState(false)

    const handeScroll = () => {

        const offset = window.scrollY;

        if (offset > 200) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handeScroll)
    })

    let x = ['navbar'];
    if (scrolled) {
        x.push('fixed');
    }

    return (
        <>

            <Navbar className={x.join("")} light expand="md">
                <Link to="/" className="navbar-brand">
                    <b>Portfolio</b>
                </Link>
                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/portfolio">Portfolio</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/skills">Skills</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about">About Me</Link>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        </>
    );
};

export default NavSec;