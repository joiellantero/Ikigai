import React from 'react';
import logo from '../images/logo.png'
import CFALogo from '../svg/CfA_B.svg'
import { Link } from "react-router-dom";
import '../style.css';

const Logo = () => {
    return (
            <Link   
                to = "/"
            >
                <div className="main-logo">
                    <img src={logo} alt="cs-logo" />
                    <div className="cfa-logo">
                        <p>Powered by</p>
                        <object type="image/svg+xml" data={CFALogo}>
                            <img src={CFALogo} alt="cfa-logo" />
                        </object>
                    </div>
                </div>
            </Link>
        );
    };   
export default Logo;