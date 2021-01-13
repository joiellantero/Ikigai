import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { Button, Row, Col, Container, Form } from 'react-bootstrap';
import {EditText } from 'react-edit-text';
import Draggable from 'react-draggable';
import { v4 } from "uuid";
import { DragDropContext } from "react-beautiful-dnd";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import logo from "./images/logo.png";
import Rectangle from "./components/Rectangle.js";
import Circle from './old_files/circle.js';
import Trash from './components/trash';
import BackButton from './components/BackButton';

const dataColumns = {
    [v4()]: {
        id: "c1",
        heading1: "What the world",
        heading2: "NEEDS",
        color: "#E1E5FF",
        headingColor: "#283972",
        items: [],
        hover1: "Stuck? Try these questions:",
        hover2: "Are you helping to solve an actual problem?",
        hover3: "Is what you’re doing bringing beauty or utility to others, helping out, and shaping the world around you?"
    },
    [v4()]: {
        id: "c2",
        heading1: "What you",
        heading2: "LOVE",
        color: "#CCFFF0",
        headingColor: "#009F6F",
        items: [],
        hover1: "Stuck? Try these questions:",
        hover2: "What are some activities truly enjoy doing about? Is there an activity or cause you enthusiastically talk about for hours on end?",
        hover3: "If you weren’t concerned about money, what would you be doing?"
    },
    [v4()]: {
        id: "c3",
        heading1: "What you are",
        heading2: "GOOD AT",
        color: "#FFE4E4",
        headingColor: "#FF5B5B",
        items: [],
        hover1: "Stuck? Try these questions:",
        hover2: "Is there an activity that your friends/family/community have sought your advice/opinion on before?",
        hover3: "Are you among the best in your workplace/community at this? With some more education and experience, could you master what you do?"
    },
    [v4()]: {
        id: "c4",
        heading1: "What You Can Be",
        heading2: "PAID FOR",
        color: "#FFFCCC",
        headingColor: "#E5C908",
        items: [],
        hover1: "Stuck? Try these questions:",
        hover2: "Lately, have you been paid for what you do? Have you ever been paid for what you do? If not, are other people being paid for this work?",
        hover3: "Are you already making a good living doing what it is that you’re doing? Can you eventually make a good living doing this work? Are there other people who can do what you do, but better?"
    },
};


const onDragEnd = (result, columns, setColumn) => {

    if (!result.destination) {
        return;
    }

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumn({
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
        setColumn({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};


const Far = () => {
    function Note(props) {
        return (
            <Draggable>
                <div
                    variant='light'
                    className='circle rounded-pill with-btn-delete'
                    onMouseEnter={() => setIsShown(true)}
                >
                    <span className="intext">
                        {props.intext}
                    </span>

                    <EditText
                        name={props.id}
                        className="edit-text"
                        value={props.intext}
                    />

                    {isShown && (
                        <span className="btn-delete-container">
                            <Trash />
                        </span>
                    )}
                </div>
            </Draggable>
        );
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleAdd() {
        if (!text) {
            return;
        }
        const newList = notes.concat(text);
        setNote(newList);

        setText('');
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (!text) {
                return;
            }

            const newList = notes.concat(text);
            setNote(newList);

            setText('');
        }
    }

    const [notes, setNote] = React.useState([]);
    const [text, setText] = React.useState('');
    const [isShown, setIsShown] = useState(false);


    const [columns, setColumn] = useState(dataColumns);
    const [showRec, setShowRec] = useState(true);
    const [showVenn, setShowVenn] = useState(false);

    const handleShowNext = () => {
        setShowRec(false);
        setShowVenn(true);
    }

    const handleShowBack = () => {
        setShowRec(true);
        setShowVenn(false);
    }

    return (
        <>
            <div className="main-logo">
                <img src={logo} alt="cs-logo" />
            </div>
            {showRec && (
                <div className="page-container-4">
                    <div className="btn-back">
                        
                        <Link to="/what-is-ikigai">
                            <BackButton />
                        </Link>
                    </div>
                    <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumn)}>
                        <div className="main-header-text">
                            <p>
                                Let’s find our ikigai!
                                <br /> <br />
                                Start by adding activites or values you are currently doing into each of these four quadrants.
                                <br />
                                Feel free to add as many as you can think of!
                            </p>
                        </div>
                        <div className='rec-container'>
                            {Object.entries(columns).map(([columnId, column]) => {
                                return (
                                    <Rectangle
                                        key={columnId}
                                        id={columnId}
                                        col={column}
                                        columns={columns}
                                        handleColumn={setColumn}
                                    />
                                );
                            })}
                        </div>
                        <div className="btn-container center">
                        <Link
                            to={{
                                pathname: "/u",
                                state: {columns}
                            }}
                        >
                            {console.log({columns})}
                            <button type="button" className="btn-default btn-2 btn-lg">
                                Next
                            </button>
                        </Link>
                            {/* <button type="button" className="btn-default btn-2 btn-lg" onClick={handleShowNext}>
                                Next
                            </button> */}
                        </div>
                    </DragDropContext>
                </div>
            )}

            {showVenn && (
                <>
                    <section className="page-container-5">
                        <div className="btn-back">
                            <BackButton onClick={handleShowBack}/>
                        </div>
                        <div className="main-header-text">
                            <p>Introducing your ikigai chart.</p>
                            <div className="instructions">
                                <p>For each of these activities or valeus, ask yourself the following questions again:</p>
                                <p>Can I Be Paid? (If yes, move to yellow circle)</p>
                                <p>Do I love this? (If yes, move to green circle)</p>
                                <p>Am I good at this? (If yes, move to red circle)</p>
                                <p>Is this what the world needs? (If yes, move to blue circle)</p>
                            </div>
                        </div>
                        <Row>
                            <Col xs={1} className="container circle">
                                {Object.entries(columns).map(([columnId, column]) => {
                                    return (
                                        <Circle
                                            key={columnId}
                                            id={column.id}
                                            col={column}
                                            columns={columns}
                                            items={columns.items}
                                            handleColumn={setColumn}
                                            headingColor={column.headingColor}
                                            heading1={column.heading1}
                                            heading2={column.heading2}
                                        />
                                    );
                                })}
                            </Col>
                            <Col xs={2} className="container circle-add">
                                <Container>
                                    <div className="pills-location">
                                        <Form.Control className='form rounded-pill' value={text} onChange={handleChange} onBlur={handleAdd} onKeyPress={handleKeyPress} placeholder="Add activity" />

                                        <Container className="pill-container">
                                            {notes.map((element, index) => <Note key={index} intext={element}></Note>)}
                                        </Container>
                                    </div>
                                </Container>
                            </Col>
                        </Row>
                    </section>
                    <div className="btn-container center pull-to-buttom">
                    {/* <Link
                            to={{
                                pathname: "/u",
                                state: {columns}
                            }}
                        >
                            {console.log({columns})}
                            <button type="button" className="btn-default btn-2 btn-lg">
                                Next
                            </button>
                        </Link> */}
                    </div>
                </>
            )
            }
        </>
    );
};

export default Far;


