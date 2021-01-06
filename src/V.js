import "./ven.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

import React, { useState } from 'react';

const intext = ['hello', 'how', 'is', 'this'];


const V = () => {
    return (
        <div className="circle25-container">
            <div className="rounded-circle">
                <span>
                    {intext[0]}
                </span>
            </div>
        </div>
    );
};

export default V;

