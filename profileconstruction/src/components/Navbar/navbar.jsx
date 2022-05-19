import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const ChangeBg = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", ChangeBg);
    return (
        <>
            <nav className={navbar ? "navbar navbar-expand fixed-top active" : "navbar navbar-expand fixed-top"}>
                <NavLink to="/" className="navbar-brand">
                    <span>C</span>onstruction
                </NavLink>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/gallery">
                                Gallery
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contac Us
                            </NavLink>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;