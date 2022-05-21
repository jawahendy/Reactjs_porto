import { NavLink } from "react-router-dom";
import imglogo from '../../Images/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand fixed-top">
                <NavLink to="/" className="navbar-brand">
                    {/* <span>C</span>elerates */}
                    <img src={imglogo} alt="" />
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
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/clients">
                                Our Client
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;