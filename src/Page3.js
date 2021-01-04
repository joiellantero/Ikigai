import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import img3 from './images/image-pg-3.png';
import { Container, Row, Col } from 'react-bootstrap';

function Page3() {

    return (
        <>
            <div className="background-2">
                <div className="btn-back">
                    <Link to="/intro">
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
                    <Col className="text-center">
                        <Row> <h4 className="title-4"><strong>What is ikigai?</strong> </h4></Row>
                        <Row md={3}> <img src={img3} alt="page-3" className="center" /> </Row>
                        <Row md={1}><p className="p-pg-2">Ikigai is a Japanese concept to achieving a long and happy life.
                        <br /> <br /> Ikigai can be described as: <br /> <br /> The practice of <strong>
                                <span style={{ color: '#FFDF00' }}> doing things of value</span>,
                            <span style={{ color: '#FF5B5B' }}> making progress</span>,
                            <span style={{ color: '#283972' }}> bringing beauty or utility to others, <br /> helping out, and shaping the world around you</span>,
                            <span style={{ color: '#0EEEAB' }}> even after your ‘official’ professional activity has <br /> ended.</span></strong>
                        </p>

                        </Row>
                        <Row> <Link to="/lets-find-out-ikigai">
                            <button type="button" class="btn-default btn-2 btn-lg">Next</button>
                        </Link>
                        </Row>
                    </Col>
                </Container>
            </div>
        </>
    );

}

export default Page3;