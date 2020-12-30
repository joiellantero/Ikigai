import React, { Component } from 'react';
import { InputGroup, Button, FormControl} from 'react-bootstrap';
import Twitter from './components/Twitter';
import Facebook from './components/Facebook';
import Linkedin from './components/Linkedin';
import Whatsapp from './components/Whatsapp';
import Trash from './components/trash';
import Add from './components/Add';

class Page8 extends Component{
    render(){
        return (
            <>
                <div className="page-container-8 container">
                    <h3>Your Ikigai, Visualised.</h3>
                    <div className="row my-5">
                        <div className="col-lg">
                            <p>***Venn Diagram Here***</p>
                        </div>
                        <div className="col-lg">
                            <p>Your steps to achieving ikigai</p>
                            <div className="steps-container container">
                                <InputGroup>
                                    <FormControl
                                        placeholder="Enter step..."
                                        aria-label="Enter step..."
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-danger"><Trash /></Button>
                                    </InputGroup.Append>
                                </InputGroup>
                                <Button className="mt-2" variant="outline-primary"><Add /></Button>
                            </div>
                        </div>
                    </div>

                    <button type="button" className="btn-default btn-2 btn-lg">
                        Export Report
                    </button>

                    <div class="card card-shadow mt-5">
                        <div class="card-body">
                            <div className="share-container container">
                                <p>Share:</p>
                                <ul>
                                    <li className="hvr-icon-bob"><a href="https://twitter.com/" target="__blank"><Twitter /></a></li>
                                    <li className="hvr-icon-bob"><a href="https://facebook.com/" target="__blank"><Facebook /></a></li>
                                    <li className="hvr-icon-bob"><a href="https://linkedin.com/" target="__blank"><Linkedin /></a></li>
                                    <li className="hvr-icon-bob"><a href="https://whatsapp.com/" target="__blank"><Whatsapp /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-5">
                        <p>
                            Achieving Ikigai is a challenging process.<br />
                            Your pursuit of Ikigai should draw you closer to a particular cause, skill, or people networks.<br /><br />

                            All the best in your pursuit of ikigai!
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default Page8;