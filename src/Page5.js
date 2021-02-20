import React, { useState } from 'react';
import { useLocation, Link } from "react-router-dom";
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


const Circa = () => {
    const { cols } = useLocation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [vocation, setVocation] = useState(false);
    const [profession, setProfession] = useState(false);
    const [mission, setMission] = useState(false);
    const [passion, setPassion] = useState(false);

    let circleData = null;
    if (cols) {
        const rectangleData = [[], [], [], []]
        let i = 0

        Object.entries(cols).map(([, column]) => {
            return (
                rectangleData[i] = column.items,
                i += 1
            );
        });

        circleData = {
            // Default parent container dimensions should be 800x800
            [v4()]: {
                id: 'r1',
                name: 'what you can be PAID FOR',
                items: rectangleData[3],
                top: '15%',
                left: '32%',
                width: '35%',
                maxWidth: '35%',
                height: '10%',
            },
            [v4()]: {
                id: 'r2',
                name: 'what the WORLD NEEDS',
                items: rectangleData[0],
                top: '36.5%',
                left: '6%',
                width: '16.2%',
                maxWidth: '18.8%',
                height: '32.3%'
            },
            [v4()]: {
                id: 'r3',
                name: 'what you LOVE',
                items: rectangleData[1],
                top: '80.3%',
                left: '32.3%',
                width: '33.9%',
                maxWidth: '35%',
                height: '11.1%'
            },
            [v4()]: {
                id: 'r4',
                name: 'what you are GOOD AT',
                items: rectangleData[2],
                top: '36.4%',
                left: '77%',
                width: '15%',
                maxWidth: '18.8%',
                height: '32.6%'
            },
            [v4()]: {
                id: 'r5',
                name: '', // blue yellow
                items: [],
                top: '27.9%',
                left: '24.9%',
                width: '16%',
                maxWidth: '18.8%',
                height: '16.8%'
            },
            [v4()]: {
                id: 'r6',
                name: '', // green blue
                items: [],
                top: '61.3%',
                left: '24.8%',
                width: '16.1%',
                maxWidth: '18.8%',
                height: '16.3%'
            },
            [v4()]: {
                id: 'r7',
                name: '', // green red
                items: [],
                top: '62.1%',
                left: '57.6%',
                width: '16.8%',
                maxWidth: '18.8%',
                height: '16%'
            },
            [v4()]: {
                id: 'r8',
                name: '', // center
                items: [],
                top: '45.3%',
                left: '40.6%',
                width: '14.9%',
                maxWidth: '18.8%',
                height: '15.6%'
            },
            [v4()]: {
                id: 'r9',
                name: '', // red yellow
                items: [],
                top: '28.8%',
                left: '57.5%',
                width: '16.5%',
                maxWidth: '18.8%',
                height: '15.9%'
            },
            [v4()]: {
                id: 'r10',
                name: '', // red yellow blue
                items: [],
                top: '32.1%',
                left: '42%',
                width: '14.4%',
                height: '11.1%',
                maxWidth: '15.6%',
            },

            [v4()]: {
                id: 'r11',
                name: '', // red blue green
                items: [],
                top: '62.9%',
                left: '42.4%',
                width: '13.6%',
                maxWidth: '14.4%',
                height: '10.5%',
            },

            [v4()]: {
                id: 'r12',
                name: '', // yellow blue green
                items: [],
                top: '46%',
                left: '28.4%',
                width: '10.6%',
                maxWidth: '12.5%',
                height: '14%',
            },

            [v4()]: {
                id: 'r13',
                name: '', // yellow green red
                items: [],
                top: '46.3%',
                left: '58.8%',
                width: '9.8%',
                maxWidth: '18.8%',
                height: '13.9%',
            },

            'add': {
                id: 'r14',
                name: '', // add activity
                items: [],
                top: '',
                left: '',
                width: '',
                height: ''
            },
        };
    }
    else {
        circleData = CIRCLE_DATA;
    }

    const [columns, setColumn] = useState(circleData);
    const filtered = Object.fromEntries(Object.entries(columns).filter(([colId]) => colId !== 'add'))
    const [text, setText] = useState('');

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
            'add': {
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


    const [modals, setModals] = useState(MODAL_DATA);

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
                            pathname: "/lets-find-our-ikigai",
                            cols: columns
                        }}
                    >
                        <button className="btn-secondary btn-lg">
                            Yes
                        </button>
                    </Link>
                </Modal.Footer>
            </Modal>
            <div className="btn-back">
                <BackButton onClick={handleShow} />
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
                                    setVocation={setVocation}
                                    setProfession={setProfession}
                                    setMission={setMission}
                                    setPassion={setPassion}
                                />
                            )}
                        )}
                    </div>
                    <div className="circle-add mt-5">
                        <AddActivity handleAdd={handleAdd} handleChange={handleChange} handleKeyPress={handleKeyPress} columns={columns} setColumn={setColumn} />
                    </div>
                </DragDropContext>
            </div>
            <div>
                <p className="main-header-text">
                    <br /> <br />
                    Please fill all 4 steps to Ikigai before proceeding.:
                    <br />
                    <b className={vocation ? "text-strike" : ""}>Vocation</b>
                    <br />
                    <b className={profession ? "text-strike" : ""}>Profession</b>
                    <br />
                    <b className={mission ? "text-strike" : ""}>Mission</b>
                    <br />
                    <b className={passion ? "text-strike" : ""}>Passion</b>
                </p>
            </div>
            <div className="btn-container-center page-5-next-button">
                <span>
                        <Link
                            to={{
                                pathname: "/export",
                                columns: columns,
                                filtered: filtered,
                                setColumn: setColumn,
                                onDragEnd: onDragEnd,
                                modals: modals
                            }}
                            type="button" 
                            className="btn-default btn-2 btn-lg anchor"
                            style={{
                                cursor: !(vocation && profession && mission && passion) ? 'not-allowed' : 'pointer',
                                pointerEvents: !(vocation && profession && mission && passion) ? 'none' : '',
                                backgroundColor: !(vocation && profession && mission && passion) ? '#7384b9' : '#283972'
                            }}
                        >
                            Next
                        </Link>
                    </span>
            </div>
        </>
    );
};

export default Circa;
