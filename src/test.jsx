import React from 'react';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import logo from './images/logo.png'; 
import Rectangle from './components/Rectangle.js';

import { v4 } from 'uuid';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const rect1 = [
    { id: v4(), intext: 'first rectangle'},
  ];
  const rect2 = [
    { id: v4(), intext: 'second rectangle'},

  ];
  const rect3 = [
    { id: v4(), intext: 'third rectangle'},

  ];
  const rect4 = [
    { id: v4(), intext: 'forth rectangle'},

  ];
  
const rectangleColumns = {
    [v4()]: {
        heading1: "What the world",
        heading2: "NEEDS",
        color: '#E1E5FF',
        headingColor: '#283972',
        items: rect1
    },
    [v4()]: {
        heading1: "What you",
        heading2: "LOVE",
        color: '#CCFFF0',
        headingColor: '#009F6F',
        items: rect2
    },
    [v4()]: {
        heading1: "What you are",
        heading2: "GOOD AT",
        color: '#FFE4E4',
        headingColor: '#FF5B5B',
        items: rect3
    },
    [v4()]: {
        heading1: "What You Can Be",
        heading2: "PAID FOR",
        color: '#FFFCCC',
        headingColor: '#E5C908',
        items: rect4
    }
 
  }


// const onDragEnd = ()=>{
//     //
// }

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
            <DragDropContext onDragEnd={onDragEnd} >
            {Object.entries(rectangleColumns).map(([columnId, column], index) => {
                return (
                <Droppable droppableId={columnId} direction="horizontal">
                {(provided)=>(
                <div ref = {provided.innerRef} {...provided.droppableProps}>
                <Rectangle
                    data = {column.items} 
                    key = {columnId} 
                    id = {columnId}
                    heading1 = {column.heading1}
                    heading2 = {column.heading2}
                    color = {column.color} 
                    headingColor = {column.headingColor}
                    >
                </Rectangle>
                {provided.placeholder}
                    </div>
                    )}
                </Droppable>
                );
            }
            )}
            </DragDropContext>
            <div className="btn-container center">
                <Link to="/introducing-your-ikigai-chart">
                    <button type="button" className="btn-default btn-2 btn-lg">Next</button>
                </Link>
            </div>
        </>
    );
}
