import "./ven.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

import React, { useState } from 'react';
import Draggable from 'react-draggable';

const intext = ['hello', 'how', 'is', 'this'];


const V = () => {
    return (
        <>
            {/* <div className="circle25-container">
                <span className="shape-1"></span>
                <div className="pills-container">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odit repellendus autem nostrum doloremque, labore sequi, temporibus excepturi neque illum eos eum dolor quam, hic corrupti! Ducimus nihil molestias sit?
                    <Draggable>
                        <div className="pill-for-circle">
                            <span>
                                {intext[0]}
                            </span>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="pill-for-circle">
                            <span>
                                {intext[1]}
                            </span>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="pill-for-circle">
                            <span>
                                {intext[2]}
                            </span>
                        </div>
                    </Draggable>
                    <Draggable>
                        <div className="pill-for-circle">
                            <span>
                                {intext[3]}
                            </span>
                        </div>
                    </Draggable> 
                    <Draggable>
                        <div className="pill-for-circle">
                            <span>
                                {intext[0]}
                            </span>
                        </div>
                    </Draggable>
                </div>
                <span className="shape-2"></span>
            </div> */}

            <div className="row-fluid">
                <div className="span9">
                    <div className="venn-container">

                            <div className="venncirctop">
                            <a className="venntxttop" href="#">Studies in Curriculum</a>
                            </div>

                    
                            <div className="venncirclft">
                            <a className="venntxtlft" href="#">Studies in Diversity</a>
                            </div>
                    
                            <div className="venncircrt">
                            <a className="venntxtrt" href="#">Studies in Digital Learning</a>
                            </div>


                            <div className="venncircbtm">
                            <a className="venntxtbtm" href="#">Studies in Educational Leadership & Policy</a>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default V;

