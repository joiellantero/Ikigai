import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 } from 'uuid';

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from 'react-bootstrap';
import {CIRCLE_DATA, MODAL_DATA} from './components/GlobalVar';
import BackButton from './components/BackButton';
import Logo from './components/CS_Logo';
import AddActivity from './components/AddActivity';
import Venn from './components/Venn';

import ModalSteps from "./components/ModalSteps";


const initCircleData = () => {
    let circleData = JSON.parse(JSON.stringify(CIRCLE_DATA));
    let storedData = localStorage.getItem('cData');
    if (!storedData) {
        return circleData;
    }
    storedData = JSON.parse(storedData);
    for (const [itemName, category] of Object.entries(storedData)) {
        circleData[category].items.push({id: v4(), intext: itemName });
    }
    return circleData;
}

const storeCircleData = (columns) => {
    const toStore = {};
    for (const key in columns) {
        if (key === 'add') {
            continue;
        }
        for (const item of columns[key].items) {
            const name = item.intext;
            toStore[name] = toStore[name] || [];
            toStore[name].push(...key.split(""));
        }
    }
    for (const key in toStore) {
        const storedList = [...new Set(toStore[key])];
        storedList.sort();
        toStore[key] = storedList.join('');
    }
    localStorage.setItem('cData', JSON.stringify(toStore));
}

const initModalData = () => {
    let modalData = Object.assign({}, MODAL_DATA);
    for (const key in modalData) {
        const value = localStorage.getItem(key);
        modalData[key].items = value ? JSON.parse(value) : [];
    }
    return modalData;
}

const Circa = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [columns, setColumn] = useState(initCircleData);
    const filtered = Object.fromEntries(Object.entries(columns).filter(([colId]) => colId !== 'add'))
    const [text, setText] = useState('');

    const onUnloadCleanup = React.useCallback(
        (e) => {
            storeCircleData(columns);
            return "circleUnloading";
        },
        [columns],
    );

    React.useEffect(
        () => {
            window.addEventListener('beforeunload', onUnloadCleanup);
            return () => {
                window.removeEventListener('beforeunload', onUnloadCleanup);
            };
        },
        [onUnloadCleanup]
    );

    function handleChange(event) {
        event.preventDefault()
        setText(event.target.value);
    }

    function handleAdd() {
        if (!text) {
            return;
        }
        const newList = columns['add'].items.concat({ id: v4(), intext: text });
        const newColumns = {
            ...columns,
            add: {
                ...columns['add'],
                items: newList
            }
        };

        setColumn(newColumns);
        setText('');
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (!text) {
                return;
            }

            const newList = columns['add'].items.concat({ id: v4(), intext: text });
            const newColumns = {
                ...columns,
                'add': {
                    ...columns['add'],
                    items: newList
                }
            };

            setColumn(newColumns);
            setText('');
        }
    }

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


    const [modals, setModals] = useState(initModalData);

    useEffect(() => {
        for (const key in modals) {
            localStorage.setItem(key, JSON.stringify(modals[key].items));
        }
    }, [modals]);

    // window.onbeforeunload = function () {
    //     return "Data will be lost if you leave the page, are you sure?";
    // };

    return (
        <>
            <Logo />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Exporting the current modal will erase all stored data.
                    <br/>
                    Do you want to proceed?
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn-default btn-lg" onClick={handleClose}>
                        No
                    </button>
                    <Link
                        to={{
                            pathname: "/export",
                            columns: columns,
                            filtered: filtered,
                            setColumn: setColumn,
                            onDragEnd: onDragEnd,
                            modals: modals
                        }}
                    >
                        <button
                            className="btn-secondary btn-lg"
                        >
                            Yes
                        </button>
                    </Link>
                </Modal.Footer>
            </Modal>
            <div className="btn-back">
                <Link
                    onClick={onUnloadCleanup}
                    to={{
                        pathname: "/lets-find-our-ikigai"
                    }}
                >
                    <BackButton/>
                </Link>
            </div>
            <div className="page-container-5 venn-diagram">
                <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumn)}>
                    <div className="main-header-text">
                        <p className="subtitle my-5">Introducing your ikigai chart.</p>
                        <div className="instructions">
                            <p>For each of these activities or values, ask yourself the following questions again:</p>
                            <p>Can I Be Paid? (If yes, move to yellow circle)</p>
                            <p>Do I love this? (If yes, move to green circle)</p>
                            <p>Am I good at this? (If yes, move to red circle)</p>
                            <p>Is this what the world needs? (If yes, move to blue circle)</p>
                        </div>
                    </div>
                    <div className="page5-left-column mt-5">
                        <Venn filtered={filtered} columns={columns} setColumn={setColumn} />
                        
                        {Object.entries(modals).map(([id, modal]) => {
                            return (
                                <ModalSteps 
                                    id = {id}
                                    key = {id} 
                                    modals = {modals} 
                                    modal = {modal} 
                                    setModals = {setModals} 
                                />
                            )}
                        )}
                    </div>
                    <div className="circle-add mt-5">
                        <AddActivity handleAdd={handleAdd} handleChange={handleChange} handleKeyPress={handleKeyPress} columns={columns} setColumn={setColumn} />
                    </div>
                </DragDropContext>
            </div>
            <br/>
            <div className="btn-container-center page-5-next-button">
                <span
                    className="btn-default btn-2 btn-lg anchor"
                    style={{
                        cursor: 'pointer',
                        pointerEvents: '',
                        backgroundColor: '#283972'
                    }} 
                    onClick={handleShow}
                >
                    Next
                </span>
            </div>
        </>
    );
};

export default Circa;
