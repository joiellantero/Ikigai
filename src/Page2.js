import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import img2 from './images/image-pg-2.png';
import { Container, Row, Col } from 'react-bootstrap';

function Page2() {

    return (
        <>
            <div className="background-2">
                <div className="btn-back">
                    <Link to="/">
                        <Button variant="light">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1A1A1A" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="5" y1="12" x2="11" y2="18" />
                                <line x1="5" y1="12" x2="11" y2="6" />
                            </svg>
                        </Button>
                    </Link>
                </div>

                <div className="main-logo">
                    <img src={logo} alt="cs-logo" />
                </div>

                <Container className="mt-20" fluid="md">
                    <Col className="justify-content-center">
                        <Row md={2}> <img src={img2} alt="page-2" className="center" /> </Row>
                        <Row md={1}><p className="p-pg-2">Follow this digital interactive as we explain the concept of ikigai and
                        <br /> discover how you can use ikigai to help you find meaning in the work you do.
                        </p></Row>
                        <Row md={1}> <Link to="/what-is-ikigai">
                            <button type="button" class="btn-default btn-2 btn-lg">Next</button>
                        </Link>
                        </Row>
                    </Col>
                </Container>
            </div>
        </>
    );

}

export default Page2;