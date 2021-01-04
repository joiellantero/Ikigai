import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import img3 from './images/image-pg-3.png';
import { Container, Row, Col } from 'react-bootstrap';

function Page3() {

    return (
        <>
            <div className="background-2">
                <div className="main-logo">
                    <img src={logo} alt="cs-logo" />
                </div>
                <Container className="mt-20" fluid="md">
                    <Col className="text-center">
                        <Row md={1}> <h4 className="title-4"><strong>What is ikigai?</strong> </h4></Row>
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
                            <button type="button" className="btn-default btn-2 btn-lg">Next</button>
                        </Link>
                        </Row>
                    </Col>
                </Container>
            </div>
        </>
    );

}

export default Page3;