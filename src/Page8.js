import React, { Component } from 'react';
import Twitter from './components/Twitter';
import Facebook from './components/Facebook';
import Linkedin from './components/Linkedin';
import Whatsapp from './components/Whatsapp';

class Page8 extends Component{
    render(){
        return (
            <>
                <div className="page-container-8 container">
                    <h3>Your Ikigai, Visualised.</h3>
                    <div className="row mt-5">
                        <div className="col-lg">
                            <p>Venn Diagram Here</p>
                        </div>
                        <div className="col-lg">
                            <p>Your steps to achieving ikigai</p>
                        </div>
                    </div>

                    <button type="button" className="btn-default btn-2 btn-lg">
                        Export Report
                    </button>

                    <div className="share-container container">
                        <p>Share: </p>
                        <ul>
                            <li className="hvr-icon-bob"><a href="https://twitter.com/" target="__blank"><Twitter /></a></li>
                            <li className="hvr-icon-bob"><a href="https://facebook.com/" target="__blank"><Facebook /></a></li>
                            <li className="hvr-icon-bob"><a href="https://linkedin.com/" target="__blank"><Linkedin /></a></li>
                            <li className="hvr-icon-bob"><a href="https://whatsapp.com/" target="__blank"><Whatsapp /></a></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Page8;