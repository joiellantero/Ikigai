import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import logo from './images/logo.png'; 
import Circle from './components/Circle.js'; 

import { v4 } from 'uuid';

const cir1 = [
    { id: v4(), intext: ['hello i am a first note']},

  ];
  const cir2 = [
    { id: v4(), intext: ['hello i am a second note']},

  ];
  const cir3 = [
    { id: v4(), intext: ['hello i am a first note']},

  ];
  const cir4 = [
    { id: v4(), intext: ['hello i am a first note']},

  ];
  
const circleItems = {
    [v4()]: {
        heading1: "What the world",
        heading2: "NEEDS",
        headingColor: '#283972',
        color: '#E1E5FF',
        items: []
    },
    [v4()]: {
        heading1: "What you",
        heading2: "LOVE",
        headingColor: '#009F6F',
        color: '#CCFFF0',
        items: []
    },
    [v4()]: {
        heading1: "What you are",
        heading2: "GOOD AT",
        headingColor: '#FF5B5B',
        color: '#FFE4E4',
        items: []
    },
    [v4()]: {
        heading1: "What You Can Be",
        heading2: "PAID FOR",
        headingColor: '#E5C908',
        color: '#FFFCCC',
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
            {Object.entries(circleItems).map(([itemId, item], index) => {
                console.log(item);
                return (<Circle 
                    data = {item} 
                    key = {itemId} 
                    heading1 = {item.heading1}
                    heading2 = {item.heading2}
                    color = {item.color} 
                    headingColor = {item.headingColor}/>);
            })}
        </>
    );
}
 
export default Far;