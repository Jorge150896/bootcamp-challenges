import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
// import logo from "../../assets/logo.png"
import "./Navbar.scss";


 const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                {/* <img src={logo} className="navbar-logo" alt =""/> */}
                MakeIt Real
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="navbar-nav">

                    <NavLink 
                        activeclassname="active"
                        className="nav-item nav-link" 
                        exact= "true"
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        activeclassname="active"
                        className="nav-item nav-link" 
                        exact= "true"
                        to="/gif"
                    >
                        Gif
                    </NavLink>
                    
                    <NavLink 
                        activeclassname="active"
                        className="nav-item nav-link" 
                        exact= "true"
                        to="/emoji"
                    >
                        Emoji
                    </NavLink>
                    <NavLink 
                        activeclassname="active"
                        className="nav-item nav-link" 
                        exact= "true"
                        to="/paint"
                    >
                        Paint
                    </NavLink>

                </div>
            </div>
        </nav>
    )
}
export default Navbar;