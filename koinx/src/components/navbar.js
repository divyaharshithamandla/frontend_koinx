import React, { useState } from 'react';
import './navbar.css';
import { useNavigate, Link } from 'react-router-dom';
const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const nav=useNavigate();
    const submit = () => {
        setIsVisible(true);
    }

    const closeMessageBox = () => {
        setIsVisible(false);
        nav('/')
    }
    const cryptotyp=()=>{
        nav('/crypto-type')
    }
    const freetools=()=>{
        nav('/free-tools')
    }
    const resourcecent=()=>{
        nav('/resource-center')
    }

    return (
        <nav className="navbar">
            <div className="logo">
            <Link to="/" className="logo-text">
                    <span className="logo-text">Koin</span><span className="big-x">X</span>
                </Link>
            </div>
            <div className="nav-links">
                <button onClick={cryptotyp}>Crypto Types</button>
                <button onClick={freetools}>Free Tools</button>
                <button onClick={resourcecent}>Resource Center</button>
            </div>
            <button className="get-started-btn" onClick={submit}>Get Started</button>

            {/* Message Box */}
            {isVisible && (
                <div className="message-box">
                    <div className="message-box-content">
                        <p>Welcome to KoinX !</p>
                        <button onClick={closeMessageBox}>Close</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
