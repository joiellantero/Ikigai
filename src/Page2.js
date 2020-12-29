import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import img2 from './images/image-pg-2.png';
import { Container, Row, Col } from 'react-bootstrap';

function Page2() {

    return (
        <>
            <div className="background-2">
                <div className="main-logo">
                    <img src={logo} alt="cs-logo" />
                </div>

                <Container className="mt-20" fluid="md">
                    <Col className="justify-content-md-center">
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