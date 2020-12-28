import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import logo from './images/logo.png'; 
import Rectangle from './components/Rectangle.js';
import Circle from './components/Circle.js'; 

import { v4 } from 'uuid';

const rect1 = [
    { id: v4(), intext: ['hello i am a first note']},

  ];
  const rect2 = [
    { id: v4(), intext: ['hello i am a second note']},

  ];
  const rect3 = [
    { id: v4(), intext: ['hello i am a first note']},

  ];
  const rect4 = [
    { id: v4(), intext: ['hello i am a first note']},

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

const Far = ()=> {
    return ( 
        <>  
            <div className = "main-header-text">
                <p>Let’s find our ikigai! <br /> <br /> Start by adding activites or values you are currently doing into each of these four quadrants.
                <br /> Feel free to add as many as you can think of!
                </p> 
            </div>
            <div className="main-logo">
                <img src={logo} alt="cs-logo" />
            </div>
            {Object.entries(rectangleColumns).map(([columnId, column], index) => {
                // replace Circle with "Rectangle" after router is added
                console.log(column);
                return (<Circle 
                    // remove className after router is added
                    data = {column} 
                    key = {columnId} 
                    heading1 = {column.heading1}
                    heading2 = {column.heading2}
                    color = {column.color} 
                    headingColor = {column.headingColor}/>);
            })}
        </>
    );
}
 
export default Far;