import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand fixed-top">
                <NavLink to="/" className="navbar-brand">
                    <span>C</span>elerates
                    {/* <img src={imglogo} alt="" /> */}
                </NavLink>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/chart">
                                Chart
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/history">
                                History
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;