import React, { useState } from 'react';
import { Container, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { v4 } from 'uuid';
import Trash from './components/trash.js';
import Info from './components/info.js';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import logo from './images/logo.png'; 
import Rectangle from './components/Rectangle.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


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
    };

    const initialNotes = ['sadasd'];

    const [notes, setNote] = React.useState(initialNotes);
    const [text, setText] = React.useState('');

    const [isShown, setIsShown] = useState(false);


    function handleChange(event) {
        setText(event.target.value);
      }

    function handleAdd() {
        if (!text){
            return;
        }
        const newList = notes.concat({ intext: text, id: v4()});
        setNote(newList);
     
        setText('');
    }


    function Note(column) {
        return (
        <div 
            variant = 'light' 
            className='rounded-pill' 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            {column.intext}
            {isShown && (
                <div className="btn-delete-container" onClick={() => column.deleteNote(column.id)}>
                    <Trash />
                </div>
            )}
        </div>
        )
    }

    const deleteNote = (id) => {
        setNote(notes.filter((note) => note.id !== id))
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          if (!text){
            return;
        }

        const newList = notes.concat({ intext: text, id: v4()});
        setNote(newList);
     
        setText('');
        }
    }

const handleDragEnd = (result, columns, setColumns) => {
    console.log(result);
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
        ...columns,
        [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems
        },
        [destination.droppableId]: {
            ...destColumn,
            items: destItems
        }
    });

    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
        ...columns,
        [source.droppableId]: {
            ...column,
            items: copiedItems
        }
        });
    }
};

const Far = ()=> {
const [columns, setColumns] = useState(rectangleColumns);

return (
    <>
        <DragDropContext
            onDragEnd={(result) => handleDragEnd(result, columns, setColumns)}
        >
            {Object.entries(columns).map(([columnId, column], index) => {
                return (
                    <div key={columnId}>
                        <div className="container">
                            <div className="rectangle-container text-center" style = {{background: column.color}}>
                                <h3 className="dark-blue" style = {{color: column.headingColor}}>
                                    {column.heading1}<br></br><strong>{column.heading2}</strong>
                                    <OverlayTrigger
                                        key="bottom"
                                        placement="bottom"
                                        overlay={
                                            <Tooltip id={`tooltip-bottom`}>
                                                <strong> What The World Needs</strong> <br /> Are you helping to solve an actual problem? <br /> Is what you’re doing bringing beauty or utility to others, helping out, and shaping the world around you?
                                            </Tooltip>
                                        }
                                    >
                                        <span>
                                            <Info />
                                        </span>
                                    </OverlayTrigger>
                                </h3>
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                {...provided.droppablecolumn}
                                                ref={provided.innerRef}
                                                style={{
                                                background: snapshot.isDraggingOver
                                                    ? column.backgroundColor
                                                    : "lightgreen",
                                                }}
                                            >
                                                <div>
                                                    <Container className="pill-container">
                                                        {column.items.map((item, index) => {
                                                            return (
                                                                <Draggable
                                                                    key={item.id}
                                                                    draggableId={item.id}
                                                                    index={index}
                                                                >
                                                                    {(provided, snapshot) => {
                                                                        return (
                                                                            <div
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggablecolumn}
                                                                                {...provided.dragHandlecolumn}
                                                                                style={{
                                                                                userSelect: "none",
                                                                                backgroundColor: snapshot.isDragging
                                                                                    ? "#263B4A"
                                                                                    : "#456C86",
                                                                                color: "white",
                                                                                ...provided.draggablecolumn.style
                                                                                }}
                                                                            >
                                                                                <Note key={item.id} intext={item.intext} id={item.id} deleteNote={deleteNote}></Note>
                                                                            <Container>
                                                                            <Form.Control className='form rounded-pill' value={text} onChange={handleChange} onBlur={handleAdd} onKeyPress={handleKeyPress} placeholder="Type here..."/>
                                                                            </Container>
                                                                            </div>
                                                                        );
                                                                    }}
                                                                </Draggable>
                                                            );
                                                        })}
                                                        {provided.placeholder}
                                                    </Container>
                                                </div>
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    </div>
                );
            })}
        </DragDropContext>
    </>
)}

export default Far;

    {/* return ( 
        <>  
        <DragDropContext
        onDragEnd={(result) => handleDragEnd(result, columns, setColumns)}>
            <div className = "main-header-text">
                <p>Let’s find our ikigai! <br /> <br /> Start by adding activites or values you are currently doing into each of these four quadrants.
                <br /> Feel free to add as many as you can think of!
                </p> 
            </div>
            <div className="main-logo">
                <img src={logo} alt="cs-logo" />
            </div>

            {Object.entries(rectangleColumns).map(([columnId, column], index) => {
                return(
                <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {

                return (
                    <div {...provided.droppablecolumn}
                    ref={provided.innerRef}
                    
                    key = {columnId} >
                    <Rectangle 
                    
                    heading1 = {column.heading1}
                    heading2 = {column.heading2}
                    color = {column.color} 
                    headingColor = {column.headingColor}
                    items = {column.items}
                    provided = {provided}
                    snapshot = {snapshot}/>
                    {provided.placeholder}
                    </div>
                    )
                }
            }
            </Droppable>
            )
            })
            }

        </DragDropContext>
        </>
    ); */}

 
