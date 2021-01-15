import React from "react";
import { Link } from "react-router-dom";

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from './components/CS_Logo';
import img2 from './images/image-pg-2.png';
import { Container } from 'react-bootstrap';
import BackButton from './components/BackButton';

function Page2() {
    return (
        <div className="page-container-2">
            <div className="btn-back">
                <Link to="/">
                    <BackButton />
                </Link>
            </div>

            <Logo/>

            <Container className="mt-20 text-center" fluid="md">
                <img src={img2} alt="page-2" className="center" /> 
                <p className="p-pg-2">
                    Follow this digital interactive as we explain the concept of ikigai and
                    <br /> 
                    discover how you can use ikigai to help you find meaning in the work you do.
                </p>
                <div className="btn-container-center">
                    <Link to="/what-is-ikigai">
                        <button type="button" className="btn-default btn-2 btn-lg">Next</button>
                    </Link>
                </div>
            </Container>
        </div>
    );
}

export default Page2;