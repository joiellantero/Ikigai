import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import "./u.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Hidden from './Hidden';
import { v4 } from 'uuid';
import {Row, Col, Form} from 'react-bootstrap';
import Note from './Note';
import BackButton from './components/BackButton';
import CircleSVG from './components/CircleSVG';
import logo from './images/logo.png';


const Circa = ()=>{
    const { state } = useLocation();
    const rectangleData = [[],[],[],[]]
    let i = 0;
    
    Object.entries({state}.state.columns).map(([columnId, column]) => {
        rectangleData[i] = column.items;
        i+=1;
    });

    const circleData = {
        [v4()]: {
            id: 'r1',
            name: 'what you are PAID FOR',
            items: rectangleData[1],
            top: '118px',
            left: '254px',
            width: '283px',
            maxWidth: '283px',
            height: '82px',
            clickable: 0
        },
        [v4()]: {
            id: 'r2',
            name: 'what the WORLD NEEDS',
            items: rectangleData[0],
            top: '292px',
            left: '83px',
            width: '90px' , 
            maxWidth: '110px',
            height: '258px',
            clickable: 0
        },
        [v4()]: {
            id: 'r3',
            name: 'what you LOVE',
            items: rectangleData[2],
            top: '642px',
            left: '259px',
            width: '271px' , 
            maxWidth: '283px',
            height: '89px',
            clickable: 0
        },
        [v4()]: {
            id: 'r4',
            name: 'what you are GOOD AT',
            items: rectangleData[3],
            top: '291px',
            left: '616px',
            width: '88px', 
            maxWidth: '110px',
            height: '261px',
            clickable: 0
        },
        [v4()]: {
            id: 'r5',
            name: '', // blue yellow
            items: [],
            top: '223px',
            left: '199px',
            width: '128px' , 
            maxWidth: '200px',
            height: '134px',
            clickable: 1,
            iconTop: '223px',
            iconLeft: '199px'
        },
        [v4()]: {
            id: 'r6',
            name: '', // green blue
            items: [],
            top: '490px',
            left: '198px',
            width: '129px' , 
            maxWidth: '200px',
            height: '130px',
            clickable: 1,
            iconTop: '490px',
            iconLeft: '198px'
        },
        [v4()]: {
            id: 'r7',
            name: '', // green red
            items: [],
            top: '497px',
            left: '461px',
            width: '134px' , 
            maxWidth: '200px',
            height: '128px',
            clickable: 1,
            iconTop: '643px',
            iconLeft: '733px'
        },
        [v4()]: {
            id: 'r8',
            name: '', // center
            items: [],
            top: '363px',
            left: '335px',
            width: '119px' , 
            maxWidth: '130px',
            height: '125px',
            clickable: 0
        },
        [v4()]: {
            id: 'r9',
            name: '', // red yellow
            items: [],
            top: '230px',
            left: '460px',
            width: '132px', 
            maxWidth: '2px',
            height: '127px',
            clickable: 1,
            iconTop: '559px',
            iconLeft: '733px'
        },

        ['add']: {
            id: 'r10',
            name: '', // add activity
            items: [{id: v4(), intext: 'this is a new activity'}],
            top: '',
            left: '',
            width: '' , 
            maxWidth: '',
            height: '',
            clickable: ''
        },
    };

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


    return (
        <>
            <div className="main-logo">
                <img src={logo} alt="cs-logo" />
            </div>
            <div className="venn-diagram" style = {{ display: 'table', margin: '0 auto'}}>
                <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumn)}>
                    <div className="btn-back">
                        {/* <BackButton /> */}
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
                    <Row className="row-container">
                        <Col xs={9} className="venn-container p-0">
                            {Object.entries(filtered).map(([columnId, column]) => {
                                return (
                                    <>
                                        <Hidden
                                            key={columnId}
                                            id={columnId}
                                            col={column}
                                            columns={columns}
                                            handleColumn={setColumn}
                                            top = {column.top}
                                            left = {column.left}
                                            width = {column.width}
                                            maxWidth = {column.maxWidth}
                                            height = {column.height}
                                            clickable = {column.clickable}
                                            iconTop = {column.iconTop}
                                            iconLeft = {column.iconLeft}
                                        />
                                    </>
                                );
                            })}
                            <CircleSVG/>
                        </Col>

                        <Col xs={3} className="circle-add mt-5">
                            <Droppable droppableId = 'add'>
                                {(provided, snapshot)=> (
                                    <>
                                        <div ref = {provided.innerRef} {...provided.droppableProps}>
                                                {provided.placeholder}
                                        </div>
                                        
                                        <div className="pills-location">
                                            <Form.Control className='form rounded-pill' value={text} 
                                                onChange={handleChange} 
                                                onBlur={handleAdd} 
                                                onKeyPress={handleKeyPress} 
                                                placeholder="Add activity..."
                                            />
                                        </div>
                                        <div className="pill-container">
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
                                                />
                                            )}
                                        </div>
                                    </>
                                )}
                            </Droppable>
                        </Col>
                    </Row>
                </DragDropContext>    
                {/* {Object.entries(filtered).map(([columnId, column]) => {
                    return (
                        <>
                            {column.clickable === 1 ? 
                                <button 
                                    className="step-btn"
                                    style ={{
                                        top: column.iconTop,
                                        left: column.iconLeft,
                                    }}
                                    onClick={console.log("clicked")}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1A1A1A" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <circle cx="12" cy="12" r="9" />
                                        <line x1="9" y1="12" x2="15" y2="12" />
                                        <line x1="12" y1="9" x2="12" y2="15" />
                                    </svg>
                                </button> 
                            : null}    
                        </>
                    );
                })} */}
            </div>
            <Link
                to={{
                    pathname: "/export",
                    state: {columns}
                }}
            >
                <button type="button" className="btn-default btn-2 btn-lg">
                    Next
                </button>
            </Link> 
            <button 
                className="step-to-ikigai-btn"
                onClick={console.log("btn was clicked")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1A1A1A" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="9" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="12" y1="9" x2="12" y2="15" />
                </svg>
            </button>   
        </>
    );
};

export default Circa;