import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import img2 from './images/image-pg-2.png';

function Page2() {

    return (
        <>
            <div className="background-2">
                <div className="main-logo">
                    <img src={logo} alt="cs-logo" />
                </div>
                <div className="img-pg-2">
                    <img src={img2} alt="page-2" />
                </div>
                <p className="p-pg-2">Follow this digital interactive as we explain the concept of ikigai and
                    <br /> discoveer how you can use ikigai to help you find meaning in the work you do.
                </p>
                <Link to="/page3">
                    <button type="button" class="btn-default btn-2 btn-lg">Next</button>
                </Link>
            </div>
        </>
    );

}

export default Page2;