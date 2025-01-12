import React, { useState } from 'react';
import './navbar.css';
import { useNavigate, Link } from 'react-router-dom';
const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const nav = useNavigate();

    const submit = () => {
        setIsVisible(true);
    };

    const cryptotyp = () => {
        nav('/crypto-type');
    };
    const freetools = () => {
        nav('/free-tools');
    };
    const resourcecent = () => {
        nav('/resource-center');
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img
                        src="image.png"
                        alt="KoinX Logo"
                        className="logo-image"
                    />
                </Link>
            </div>
            <div className="nav-links">
                <button onClick={cryptotyp}>Crypto Types</button>
                <button onClick={freetools}>Free Tools</button>
                <button onClick={resourcecent}>Resource Center</button>
            </div>
            <button className="get-started-btn">Get Started</button>
        </nav>
    );
};

export default Navbar;
