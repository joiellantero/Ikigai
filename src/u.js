import React, {  useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 } from 'uuid';

import "./u.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Modal } from 'react-bootstrap';

import BackButton from './components/BackButton';
import Logo from './images/logo';
import AddActivity from './AddActivity';
import Venn from './Venn';

const Circa = () => {
    const {cols, pathname}  = useLocation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let circleData = null;
    
    if (pathname === '/u'){
        const rectangleData = [[], [], [], []]
        let i = 0

        Object.entries(cols).map(([, column]) => {
            rectangleData[i] = column.items;
            i += 1;
        });

        circleData = {
            [v4()]: {
                id: 'r1',
                name: 'what you can be PAID FOR',
                items: rectangleData[3],
                top: '118px',
                left: '254px',
                width: '283px',
                maxWidth: '283px',
                height: '82px',
            },
            [v4()]: {
                id: 'r2',
                name: 'what the WORLD NEEDS',
                items: rectangleData[0],
                top: '292px',
                left: '46px',
                width: '128px',
                maxWidth: '150px',
                height: '258px'
            },
            [v4()]: {
                id: 'r3',
                name: 'what you LOVE',
                items: rectangleData[1],
                top: '642px',
                left: '259px',
                width: '271px',
                maxWidth: '283px',
                height: '89px'
            },
            [v4()]: {
                id: 'r4',
                name: 'what you are GOOD AT',
                items: rectangleData[2],
                top: '291px',
                left: '616px',
                width: '120px',
                maxWidth: '150px',
                height: '261px'
            },
            [v4()]: {
                id: 'r5',
                name: '', // blue yellow
                items: [],
                top: '223px',
                left: '199px',
                width: '128px',
                maxWidth: '150px',
                height: '134px'
            },
            [v4()]: {
                id: 'r6',
                name: '', // green blue
                items: [],
                top: '490px',
                left: '198px',
                width: '129px',
                maxWidth: '150px',
                height: '130px'
            },
            [v4()]: {
                id: 'r7',
                name: '', // green red
                items: [],
                top: '497px',
                left: '461px',
                width: '134px',
                maxWidth: '150px',
                height: '128px'
            },
            [v4()]: {
                id: 'r8',
                name: '', // center
                items: [],
                top: '362px',
                left: '325px',
                width: '119px',
                maxWidth: '150px',
                height: '125px'
            },
            [v4()]: {
                id: 'r9',
                name: '', // red yellow
                items: [],
                top: '230px',
                left: '460px',
                width: '132px',
                maxWidth: '150px',
                height: '127px'
            },
            ['add']: {
                id: 'r10',
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
        circleData = cols;
    }

    const [columns, setColumn] = useState(circleData);
    const filtered = Object.fromEntries(Object.entries(columns).filter(([colId]) => colId !== 'add'))
    const [text, setText] = React.useState('');

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
            ['add']: {
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
                ['add']: {
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

    window.onbeforeunload = function() {
        return "Data will be lost if you leave the page, are you sure?";
    };

    return (
        <>
            <Logo/>
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
                            pathname: "/lets-find-out-ikigai",
                            cols: columns
                        }}
                    >
                        <button className="btn-secondary btn-lg">
                            Yes
                        </button>
                    </Link>
                </Modal.Footer>
            </Modal>
            <div className="venn-diagram" style={{ display: 'table', margin: '0 auto' }}>
                <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumn)}>
                    <div className="btn-back">
                        <BackButton onClick={handleShow}/>
                    </div>
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
                    <Row className="row-container mt-5">
                        <Col xs={9}>
                            <Venn filtered = {filtered} columns ={columns} setColumn = {setColumn}/>
                        </Col>
                        <Col xs={3} className="circle-add mt-5">
                            <AddActivity handleAdd = {handleAdd} handleChange = {handleChange} handleKeyPress = {handleKeyPress} columns ={columns} setColumn = {setColumn}/>
                        </Col>
                    </Row>
                </DragDropContext>
            </div>
            <div className="btn-container-center">
                <Link
                    to={{
                        pathname: "/export",
                        columns: columns, 
                        filtered: filtered, 
                        setColumn: setColumn,
                        onDragEnd: onDragEnd
                    }}
                >
                    <button type="button" className="btn-default btn-2 btn-lg">
                        Next
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Circa;
