import React, { useState } from 'react';
import { Container, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {EditText } from 'react-edit-text';
import { v4 } from 'uuid';
import Trash from '../components/trash.js';
import Info from '../components/info.js';
import { Draggable } from 'react-beautiful-dnd';


const Rectangle = (props) => {
    const [notes, setNote] = useState(props.data);
    const [text, setText] = useState('');
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

    const handleEdit = ({name, value}) => {
        for (let i = 0; i < notes.length; i++){
            if (name === notes[i].id){
                notes[i].intext = value;
            }
        }
    }

    function Note(props) {
        return (
        <Draggable draggableId = {props.id} index ={props.index}>
        {(provided)=>(
        <div 
            variant = 'light' 
            className='rounded-pill with-btn-delete' 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref ={provided.innerRef} 
        >
            <span className="intext">
                {props.intext}
            </span>
            
            <EditText
                name={props.id}
                className="edit-text"
                value={props.intext}
                onSave={handleEdit}
            />

            {isShown && (
                <span className="btn-delete-container" onClick={() => props.deleteNote(props.id)}>
                    <Trash />
                </span>
            )}
        </div>
        )}
        </Draggable>
        );
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
    
    return ( 
        <>
            <div className="rectangle-container text-center" style = {{background: props.color}}>
                <h3 className="dark-blue" style = {{color: props.headingColor}}>
                    {props.heading1}<br></br><strong>{props.heading2}</strong>
                    <OverlayTrigger
                        key="bottom"
                        placement="bottom"
                        overlay={
                            <Tooltip id={`tooltip-bottom`}>
                                <strong> {props.hover1}</strong> <br /> {props.hover2} <br /> {props.hover3}
                            </Tooltip>
                        }
                    >
                        <span>
                            <Info color={props.color} />
                        </span>
                    </OverlayTrigger>
                </h3>

                <Container className="pill-container">
                    {notes.map((element, index) => 
                        <>
                            <Note key={element.id.toString()} intext={element.intext} id={element.id} deleteNote={deleteNote} index = {index}></Note>
                        </>
                    )}
                </Container>

                <Container>
                    <Form.Control className='form rounded-pill' value={text} onChange={handleChange} onBlur={handleAdd} onKeyPress={handleKeyPress} placeholder="Type here..."/>
                </Container>
            </div>
        </>
    );
}
 
export default Rectangle; 