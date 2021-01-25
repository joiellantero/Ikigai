import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import centerLogo from './images/ikigai-logo.png';
import cornerLogo from './images/csjournaling.png';
import CFALogo from './svg/CfA_B.svg'

function Page1() {

    return (
        <div className="page-container-1">
            <div className="corner-logo">
                <img src={cornerLogo} alt="#CSJournaling" />
                <div className="cfa-logo">
                    <p>Powered by</p>
                    <object type="image/svg+xml" data={CFALogo}>
                        <img src={CFALogo} alt="cfa-logo" />
                    </object>
                </div>
            </div>

            <div className="center-logo">
                <img src={centerLogo} alt="finding-your-ikigai" />
            </div>

            <div className="button-container">
                <Link to="/intro">
                    <button type="button" className="btn-default btn-lg btn-1">Next</button>
                </Link>
            </div>

            <footer></footer>
        </div>
    );

}

export default Page1;