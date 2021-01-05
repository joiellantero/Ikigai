import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useReactToPrint } from 'react-to-print';
import { REC } from './RectangleVar.js'
import logo from './images/logo.png';
import Circle from './components/Circle.js';



const Far = () => {
    return (
        <>
            <section className="page-container-5">
                <div className="btn-back">
                    <Link to="/lets-find-out-ikigai">
                        <Button variant="light">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1A1A1A" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <line x1="5" y1="12" x2="11" y2="18" />
                                <line x1="5" y1="12" x2="11" y2="6" />
                            </svg>
                        </Button>
                    </Link>
                </div>
                <div className="main-header-text">
                    <p>Introducing your ikigai chart.</p>
                    <div className="instructions">
                        <p>For each of these activities or valeus, ask yourself the following questions again:</p>
                        <p>Can I Be Paid? (If yes, move to yellow circle)</p>
                        <p>Do I love this? (If yes, move to green circle)</p>
                        <p>Am I good at this? (If yes, move to red circle)</p>
                        <p>Is this what the world needs? (If yes, move to blue circle)</p>
                    </div>
                </div>
                <div className="main-logo">
                    <img src={logo} alt="cs-logo" />
                </div>
                <div className="container circle">
                    <Circle
                        data={REC}
                    />
                </div>
                <div className="btn-container center mt-5">
                    <Link to="/export">
                        <button type="button" className="btn-default btn-2 btn-lg">
                            Next
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Far;

