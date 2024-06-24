import React from 'react';
import '../style.css';

const Add = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#5d5d5a" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line stroke={props.color || "grey"} x1="12" y1="5" x2="12" y2="19" />
            <line stroke={props.color || "grey"} x1="5" y1="12" x2="19" y2="12" />
        </svg>
    )
};

export default Add