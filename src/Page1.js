import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import centerLogo from './images/ikigai-logo.png';
import cornerLogo from './images/csjournaling.png';

function Page1() {

    return (
        <div className="page-container-1">
            <div className="corner-logo">
                <img src={cornerLogo} alt="#CSJournaling" />
            </div>

            <div className="center-logo">
                <img src={centerLogo} alt="finding-your-ikigai" />
            </div>

            <div className="button-container">
                <Link to="/intro">
                    <button type="button" class="btn-default btn-lg btn-1">Next</button>
                </Link>
            </div>

            <footer></footer>
        </div>
    );

}

export default Page1;