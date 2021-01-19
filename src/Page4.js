import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { DragDropContext } from "react-beautiful-dnd";

import { Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Logo from './components/CS_Logo';
import Rectangle from "./components/Rectangle.js";
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
    const [columns, setColumn] = useState(dataColumns);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    window.onbeforeunload = function () {
        return "Data will be lost if you leave the page, are you sure?";
    };

    return (
        <>
            <Logo />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Going back to the previous page will erase your progress? Do you want to begin from scratch?</Modal.Body>
                <Modal.Footer>
                    <button className="btn-default btn-lg" onClick={handleClose}>
                        No
                    </button>
                    <Link
                        to={{
                            pathname: "/what-is-ikigai",
                            cols: columns
                        }}
                    >
                        <button className="btn-secondary btn-lg">
                            Yes
                        </button>
                    </Link>
                </Modal.Footer>
            </Modal>
            <div className="page-container-4">
                <div className="btn-back">
                    <BackButton onClick={handleShow} />
                </div>
                <div className="page-content">
                    <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumn)}>
                        <div className="main-header-text">
                            <p className="subtitle my-5">Let’s find our ikigai!</p>
                            <br />
                            <p>Start by adding activites or values you are currently doing into each of these four quadrants.</p>
                            <p>Feel free to add as many as you can think of!</p>
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
                                    pathname: "/your-ikigai-chart",
                                    cols: columns
                                }}
                            >
                                <button type="button" className="btn-default btn-2 btn-lg">
                                    Next
                                </button>
                            </Link>
                        </div>
                    </DragDropContext>
                </div>
            </div>
        </>
    );
};

export default Far;


