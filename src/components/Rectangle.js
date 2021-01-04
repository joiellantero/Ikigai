import React, { useState } from 'react';
import { Container, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {EditText } from 'react-edit-text';
import { v4 } from 'uuid';
import Trash from '../components/trash.js';
import Info from '../components/info.js';
import { Draggable } from 'react-beautiful-dnd';


const Rectangle = (props)=> {
    const [text, setText] = useState('');
    const [isShown, setIsShown] = useState(false);

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleAdd() {
        if (!text){
            return;
        }
        const newList = props.col.items.concat({id: v4(), intext: text });

        const newColumns = {
            ...props.columns,
            [props.id]: {
              ...props.col,
              items: newList
            }
          };

        props.handleColumn(newColumns);
        
        setText('');
    }

    const handleEdit = ({name, value}) => {
        const newList = Array.from(props.data)

        for (let i = 0; i < newList.length; i++){
            if (name === newList[i].id){
                newList[i].intext = value;
            }
        }

        const newColumns = {
            ...props.columns,
            [props.id]: {
              ...props.col,
              items: newList
            }
          };

        props.handleColumn(newColumns);

    }

    function Note(props) {
        return (
        <Draggable draggableId = {props.id} key = {props.id} index ={props.index}>
        {(provided, snapshot)=>(
        <div 
            variant = 'light' 
            className='rounded-pill with-btn-delete' 
            onMouseEnter={() => setIsShown(true)}
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
        const deleted = (props.col.items.filter((note) => note.id !== id))

        const newColumns = {
            ...props.columns,
            [props.id]: {
              ...props.col,
              items: deleted
            }
          };

        props.handleColumn(newColumns);
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          if (!text){
            return;
        }
            const newList = props.col.items.concat({id: v4(), intext: text });

            const newColumns = {
                ...props.columns,
                [props.id]: {
                ...props.col,
                items: newList
                }
          };

        props.handleColumn(newColumns);
        
        setText('');
        }
    }
    
    return ( 
        <>
            <div className="rectangle-container text-center" style = {{background: props.isDraggingOver ? "skyblue" :props.color , border: props.isDraggingOver ? '2px solid green' : ''}}>
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
                            <Info color={props.headingColor} />
                        </span>
                    </OverlayTrigger>
                </h3>

                <Container className="pill-container">
                    {props.col.items.map((element, index) => 
                        <>
                            <Note key={element.id} intext={element.intext} id={element.id} deleteNote={deleteNote} index = {index}></Note>
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