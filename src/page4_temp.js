import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Form, Col, Row} from 'react-bootstrap';
import {EditText } from 'react-edit-text';
import Draggable from 'react-draggable';
import Trash from './components/trash';


import logo from './images/logo.png';
import Circle from './old_files/circle.js';

import { v4 } from 'uuid';


const circleItems = {
    [v4()]: {
        id: "c1",
        heading1: "What the world",
        heading2: "NEEDS",
        headingColor: '#283972',
        color: '#E1E5FF',
        border: '10px solid #293972',
        items: []
    },
    [v4()]: {
        id: "c2",
        heading1: "What you",
        heading2: "LOVE",
        headingColor: '#009F6F',
        color: '#CCFFF0',
        border: '10px solid #009F6F',
        items: []
    },
    [v4()]: {
        id: "c3",
        heading1: "What you are",
        heading2: "GOOD AT",
        headingColor: '#FF5B5B',
        color: '#FFE4E4',
        border: '10px solid #FF5C5B',
        items: []
    },
    [v4()]: {
        id: "c4",
        heading1: "What You Can Be",
        heading2: "PAID FOR",
        headingColor: '#E5C908',
        color: '#FFFCCC',
        border: '10px solid #E5C907',
        items: []
    }
};


const Far = ()=> {
    const [notes, setNote] = React.useState([]);
    const [text, setText] = React.useState('');

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleAdd() {
        if (!text){
            return;
        }
        const newList = notes.concat(text);
        setNote(newList);

        setText('');
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          if (!text){
            return;
        }

        const newList = notes.concat(text);
        setNote(newList);

        setText('');
        }
    }

    const [isShown, setIsShown] = useState(false);

    function Note(props) {
        return (
            <Draggable>
            <div
                variant = 'light'
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

    return (
        <>
            <section className="page-container-5">
                <div className = "main-header-text">
                    <p>Let’s find our ikigai! <br /> <br /> Start by adding activites or values you are currently doing into each of these four quadrants.
                    <br /> Feel free to add as many as you can think of!
                    </p>
                </div>
                <div className="main-logo">
                    <img src={logo} alt="cs-logo" />
                </div>
                <Row>
                    <Col>
                        <div className="container circle">
                            {Object.entries(circleItems).map(([itemId, item], index) => {
                                return (
                                    <Circle
                                        id = {item.id}
                                        data = {item}
                                        key = {itemId}
                                        heading1 = {item.heading1}
                                        heading2 = {item.heading2}
                                        color = {item.color}
                                        border = {item.border}
                                        headingColor = {item.headingColor}
                                    />
                                );
                            })}
                        </div>
                    </Col>

                    <Col xs={2}>
                        <Container>
                            <div className="pills-location">
                            <Form.Control className='form rounded-pill' value={text} onChange={handleChange} onBlur={handleAdd} onKeyPress={handleKeyPress} placeholder="Type here..."/>
                            
                            <Container className="pill-container">
                                {notes.map((element, index) => <Note key={index} intext={element}></Note>)}
                            </Container>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default Far;
