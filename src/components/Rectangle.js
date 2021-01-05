import React, { useState } from 'react';
import { Container, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {EditText } from 'react-edit-text';
import { v4 } from 'uuid';
import Trash from '../components/trash.js';
import Info from '../components/info.js';
import { Draggable, Droppable } from 'react-beautiful-dnd';


const Rectangle = (props)=> {
    const {heading1, heading2, color, headingColor, hover1, hover2, hover3, items} = props.col;

    const [text, setText] = useState('');
    const [isShown, setIsShown] = useState(false);

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleAdd() {
        if (!text){
            return;
        }
        const newList = items.concat({id: v4(), intext: text });

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
        const newList = Array.from(items)

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
        const deleted = (items.filter((note) => note.id !== id))

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
            const newList = items.concat({id: v4(), intext: text });

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
        <Droppable droppableId={props.id} direction="horizontal">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div className="rectangle-container text-center" style = {{background: snapshot.isDraggingOver ? "skyblue" :color , border: snapshot.isDraggingOver ? '2px solid green' : ''}}>
                <h3 className="dark-blue" style = {{color: headingColor}}>
                    {heading1}<br></br><strong>{heading2}</strong>
                    <OverlayTrigger
                        key="bottom"
                        placement="bottom"
                        overlay={
                            <Tooltip id={`tooltip-bottom`}>
                                <strong> {hover1}</strong> <br /> {hover2} <br /> {hover3}
                            </Tooltip>
                        }
                    >
                        <span>
                            <Info color={headingColor} />
                        </span>
                    </OverlayTrigger>
                </h3>

                <Container className="pill-container">
                    {items.map((element, index) => 
                        <>
                            <Note {...props} key={element.id} intext={element.intext} id={element.id} deleteNote={deleteNote} index = {index}></Note>
                        </>
                    )}
                </Container>

                <Container>
                    <Form.Control className='form rounded-pill' value={text} onChange={handleChange} onBlur={handleAdd} onKeyPress={handleKeyPress} placeholder="Type here..."/>
                </Container>
            </div>
            {provided.placeholder}
        </div>
        )}
        </Droppable>

    );
}
 
export default Rectangle; 