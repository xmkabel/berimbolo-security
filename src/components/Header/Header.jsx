import react from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router";
import Navbar from '../Navbar/Navbar';

function Header(){
    const scrollToSection = (x) => {
        const section = document.getElementById(x);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return(
        <>
            <link rel="stylesheet" href="
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
<div className="container-center">
            <Navbar/>
</div>
            <header class="hero">
        <div class="hero-content">
            <h1>Your safety  is our priority.</h1>
            <p>Your trusted partner in advanced security solutions.</p>
            <a class="cta-button button" href="#why">Get Started
                <i class="fas fa-arrow-right m-1"></i></a>
        </div>
    </header>
        </>
    )
}


export default Header;