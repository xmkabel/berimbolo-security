import React from 'react';
import './Navbar.css';
import logo from './Cyber Security.png';
function Navbar(){
    return (
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <a className="logo navbar-brand" href="#">
                    <img src={logo} alt="logo-icon" />
                    <span>Berimbolo Security</span>
                </a>
                
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#why">Why us?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#products">Services & Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#reviews">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;