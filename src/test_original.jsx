import React from 'react';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import logo from './images/logo.png';
import Rectangle from './components/Rectangle.js';

import { v4 } from 'uuid';

const rect1 = [
    { id: v4(), intext: ['hello i am a first note'] },

];
const rect2 = [
    { id: v4(), intext: ['hello i am a second note'] },

];
const rect3 = [
    { id: v4(), intext: ['hello i am a first note'] },

];
const rect4 = [
    { id: v4(), intext: ['hello i am a first note'] },

];

const rectangleColumns = {
    [v4()]: {
        heading1: "What the world",
        heading2: "NEEDS",
        color: '#E1E5FF',
        headingColor: '#283972',
        items: []
    },
    [v4()]: {
        heading1: "What you",
        heading2: "LOVE",
        color: '#CCFFF0',
        headingColor: '#009F6F',
        items: []
    },
    [v4()]: {
        heading1: "What you are",
        heading2: "GOOD AT",
        color: '#FFE4E4',
        headingColor: '#FF5B5B',
        items: []
    },
    [v4()]: {
        heading1: "What You Can Be",
        heading2: "PAID FOR",
        color: '#FFFCCC',
        headingColor: '#E5C908',
        items: []
    }
};

const Far = () => {
    return (
        <>
            <div className="main-header-text">
                <p>Let’s find our ikigai! <br /> <br /> Start by adding activites or values you are currently doing into each of these four quadrants.
                <br /> Feel free to add as many as you can think of!
                </p>
            </div>
            <div className="main-logo">
                <img src={logo} alt="cs-logo" />
            </div>
            {Object.entries(rectangleColumns).map(([columnId, column], index) => {
                console.log(column);
                return (<Rectangle
                    data={column}
                    key={columnId}
                    heading1={column.heading1}
                    heading2={column.heading2}
                    color={column.color}
                    headingColor={column.headingColor} />);
            })}

            <div class="btn-container center">
                {/* <Link to="/introducing-your-ikigai-chart">
                    <button type="button" className="btn-default btn-2 btn-lg">Next</button>
                </Link> */}

                <Link
                    to={{
                        pathname: "/introducing-your-ikigai-chart",
                        state: { rectangleColumns } // your data array of objects
                    }}
                >
                    <button type="button" className="btn-default btn-2 btn-lg">Next</button>
                </Link>

            </div>
        </>
    );
}

export default Far;