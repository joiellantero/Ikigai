import "./ven.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

import React, { useState } from 'react';
import Draggable from 'react-draggable';

const intext = ['hello', 'how', 'is', 'this'];


const V = () => {
    return (
        <>
            <div className="circle25-container">
                <Draggable>
                    <div className="put-border pill-for-circle">
                        <span>
                            {intext[0]}
                        </span>
                    </div>
                </Draggable>
            </div>
        </>
    );
};

export default V;

