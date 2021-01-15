import React from 'react';
import "../style.css";

const CircleSVG = () => {
    return (
        <>
            <svg width="800" height="800" viewBox="0 0 150 150">
                <g>
                    <circle cx="48" cy="79" r="40" className="circle c1"></circle>
                    <circle cx="100" cy="79" r="40" className="circle c2"></circle>
                    <circle cx="74" cy="105" r="40" className="circle c3"></circle>
                    <circle cx="74" cy="54" r="40" className="circle c4"></circle>
                </g>
            </svg>
            <div className="venn-labels">
                <p className="c1">What the world NEEDS</p>
                <p className="c2">What you are GOOD AT</p>
                <p className="c3">What you LOVE</p>
                <p className="c4">What you are PAID FOR</p>
            </div>
        </>
    )
}

export default CircleSVG;