import React, { useState } from 'react';
import { Container, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { v4 } from 'uuid';
import Trash from '../components/trash.js';
import Info from '../components/info.js';
import {EditText } from 'react-edit-text';
import Draggable from 'react-draggable';

//const initialNotes = [{id: v4(), intext:'hello'}, {id: v4(), intext:'this'}, {id: v4(), intext:'is'}, {id: v4(), intext:'a'}, {id: v4(), intext:'note'}]

const Circle = (props)=> {
    const [notes, setNote] = React.useState(props.col.items);
    const [text, setText] = React.useState('');

    const [isShown, setIsShown] = useState(false);

    function handleChange(event) {
        setText(event.target.value);
    }

<<<<<<< HEAD
=======

>>>>>>> joie
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

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          if (!text){
            return;
        }

        const newList = notes.concat({ intext: text, id: v4()});

        setText('');
        }
    }

    return (
        <>
            <div className={props.id}>
                <div className="circle-container" style={{border: props.border}}>
                    <span className="title-container" style={{color: props.headingColor}}>
                        {props.heading1}<br></br><strong>{props.heading2}</strong>
                    </span>

                    <div className="pills-location">
                        <Container className="pill-container">
                            {notes.map((element) => <Note key={element.id.toString()} intext={element.intext} id={element.id}></Note>)}
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Circle;
