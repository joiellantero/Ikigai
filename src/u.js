import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./u.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Hidden from './Hidden';
import { v4 } from 'uuid';
import {Row, Col, Container, Form} from 'react-bootstrap';
import Trash from './components/trash';
import Note from './Note';
import BackButton from './components/BackButton';



const circleData = {
    [v4()]: {
        id: 'r1',
        name: 'what you are PAID FOR',
        items: [],
        top: '62px',
        left: '172px',
        width: '247px', 
        height: '87px'
        },
    [v4()]: {
        id: 'r2',
        name: 'what the WORLD NEEDS',
        items: [],
        top: '194px',
        left: '39px',
        width: '90px' , 
        height: '255px'
        },
    [v4()]: {
        id: 'r3',
        name: 'what you LOVE',
        items: [],
        top: '483px',
        left: '179px',
        width: '232px' , 
        height: '89px'
        },
    [v4()]: {
        id: 'r4',
        name: 'what you are GOOD AT',
        items: [],
        top: '190px',
        left: '463px',
        width: '89px' , 
        height: '256px'
        },
    [v4()]: {
        id: 'r5',
        name: '', // blue yellow
        items: [],
        top: '164px',
        left: '145px',
        width: '97px' , 
        height: '100px'
        },
    [v4()]: {
        id: 'r6',
        name: '', // green blue
        items: [],
        top: '373px',
        left: '144px',
        width: '103px' , 
        height: '96px'
        },
    [v4()]: {
        id: 'r7',
        name: '', // green red
        items: [],
        top: '374px',
        left: '343px',
        width: '106px' , 
        height: '94px'
        },
    [v4()]: {
        id: 'r8',
        name: '', // center
        items: [],
        top: '268px',
        left: '247px',
        width: '96px' , 
        height: '100px'
        },
    [v4()]: {
        id: 'r9',
        name: '', // red yellow
        items: [],
        top: '164px',
        left: '345px',
        width: '103px' , 
        height: '99px'
    },
    ['add']: {
        id: 'r10',
        name: '', // add activity
        items: [{id: v4(), intext: 'dshjfgdhsjgf'}],
        top: '',
        left: '',
        width: '' , 
        height: ''
    },
};

const Circa = ()=>{
    const [columns, setColumn] = useState(circleData);
    const filtered = Object.fromEntries(Object.entries(columns).filter(([colId, col]) => colId !== 'add'))
    const [text, setText] = React.useState('');

    function handleChange(event) {
        event.preventDefault()
        setText(event.target.value);
    }

    function handleAdd() {
        if (!text){
            return;
        }
        const newList = columns['add'].items.concat({id: v4(), intext: text});

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
        if(event.key === 'Enter'){
          if (!text){
            return;
        }

        const newList = columns['add'].items.concat({id: v4(), intext: text});

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
    //top, left, width, height
    //paid, vocation, needs, mission, love, passion, ikigai, profession, good

    const data = [['62px', '172px', '247px', '87px'], // yellow
    ['164px', '145px', '97px', '100px'], //blue yellow
    ['194px', '39px', '90px', '255px'], // blue
    ['373px', '144px', '103px', '96px'], // green blue
    ['483px', '179px', '232px', '89px'], // green
    ['374px', '343px', '106px', '94px'], // green red
    ['268px', '247px', '96px', '100px'], // center
    ['164px', '345px', '103px', '99px'], // red yellow
    ['190px', '463px', '89px', '256px']]; // red 

    return (
        <body className="venn-diagram" style = {{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumn)}>
                <div className="btn-back">
                    <BackButton />
                </div>
                <div className="main-header-text">
                    <p>Introducing your ikigai chart.</p>
                    <div className="instructions">
                        <p>For each of these activities or values, ask yourself the following questions again:</p>
                        <p>Can I Be Paid? (If yes, move to yellow circle)</p>
                        <p>Do I love this? (If yes, move to green circle)</p>
                        <p>Am I good at this? (If yes, move to red circle)</p>
                        <p>Is this what the world needs? (If yes, move to blue circle)</p>
                    </div>
                </div>
                <Row>
                    <Col>
                        <div className="flex-container">
                            <div style={{textAlign:"center"}}>
                            
                                {Object.entries(filtered).map(([columnId, column]) => {
                                    return (
                                        <Hidden
                                            key={columnId}
                                            id={columnId}
                                            col={column}
                                            columns={columns}
                                            handleColumn={setColumn}
                                            top = {column.top}
                                            left = {column.left}
                                            width = {column.width}
                                            height = {column.height}>
                                        </Hidden>
                                    );
                                })}

                                <svg width="600" height="600" viewBox="0 0 150 150">
                                <g>
                                    <circle cx="48" cy="79" r="50" className="circle c1"></circle>
                                    <circle cx="100" cy="79" r="50" className="circle c2"></circle>
                                    <circle cx="74" cy="105" r="50" className="circle c3"></circle>
                                    <circle cx="74" cy="54" r="50" className="circle c4"></circle>
                                </g>
                                </svg>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <Droppable droppableId = 'add'>
                            {(provided, snapshot)=> (
                                <>
                                    <div ref = {provided.innerRef} {...provided.droppableProps}>
                                            {provided.placeholder}
                                    </div>
                                    
                                    <Container>
                                        <div className="pills-location">
                                            <Form.Control className='form rounded-pill' value={text} 
                                                onChange={handleChange} 
                                                onBlur={handleAdd} 
                                                onKeyPress={handleKeyPress} 
                                                placeholder="Type here..."
                                            />
                                        </div>
                                        <Container className="pill-container">
                                            {columns['add'].items.map((element, index) => 
                                                <Note 
                                                    columnId = 'add'
                                                    col = {circleData['add']} 
                                                    columns = {circleData} 
                                                    items = {circleData['add'].items} 
                                                    key={element.id} 
                                                    id={element.id} 
                                                    intext={element.intext} 
                                                    handleColumn = {setColumn} 
                                                    index = {index}
                                                    >
                                                </Note>
                                            )}
                                        </Container>

                                    </Container>
                                </>
                            )}
                        </Droppable>
                    </Col>
                </Row>
            </DragDropContext>    
        </body>
    );
};

export default Circa;