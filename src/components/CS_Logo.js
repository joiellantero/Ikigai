import React from 'react';
import logo from '../images/logo.png'
import { Link } from "react-router-dom";
import '../style.css';

const Logo = () => {
    return (
            <Link   
                to = "/"
            >
                <div className="main-logo">
                    <img src={logo} alt="cs-logo" />
                </div>
            </Link>
        );
    };   
export default Logo;