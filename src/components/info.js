import React from 'react';
import '../style.css';


const Info = (props) => {
    // get the props.color from rectangle and change the color of the info icon respectively
    let strokeColor = Object.values(props).toString();

    return (
        <svg className="info-btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke= {strokeColor} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
            <polyline points="11 12 12 12 12 16 13 16" />
        </svg>
    )
};

export default Info;