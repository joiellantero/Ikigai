import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import logo from './images/logo.png'; 
import Rectangle from './components/Rectangle.js';

import { v4 } from 'uuid';

const rect1 = [
    { id: v4(), intext: ['hello i am a first note']},

  ];
  const rect2 = [
    { id: v4(), intext: ['hello i am a first note']},

  ];
  const rect3 = [
    { id: v4(), intext: ['hello i am a first note']},

  ];
  
  const columnsFromBackend = {
    [v4()]: {
        heading: "What the world <br></br><strong>NEEDS </strong>",
        items: []
    },
    [v4()]: {
        heading: "What you <br></br><strong>LOVE </strong>",
        items: []
    },
    [v4()]: {
        heading: "What you are <br></br><strong>GOOD AT</strong>",
        items: []
    },
    [v4()]: {
        heading: "What You Can Be <br></br><strong>PAID FOR</strong>",
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
            <Rectangle text = {rect1} />
            <Rectangle text = {rect2} />

        </>
    );
}
 
export default Far;