import React, { useState } from 'react';
import { Container, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { Droppable } from 'react-beautiful-dnd';
import { v4 } from 'uuid';

import Info from '../components/info.js';
import Note from './Note';


const Rectangle = (props)=> {
    const {heading1, heading2, color, headingColor, hover1, hover2, hover3, items} = props.col;
    const [text, setText] = useState('');

    function handleChange(event) {
        event.preventDefault()
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
                <div 
                    className="rectangle-container text-center" 
                    ref={provided.innerRef} {...provided.droppableProps} 
                    style = {{
                        background: snapshot.isDraggingOver ? color : color , 
                        borderColor: snapshot.isDraggingOver ? headingColor : '',
                        borderWidth: snapshot.isDraggingOver ? '2px' : '',
                        borderStyle: snapshot.isDraggingOver ? 'solid' : '',
                    }}
                >
                    <h3 className="dark-blue" style = {{color: headingColor}}>
                        {heading1}<br></br><strong>{heading2}</strong>
                        <OverlayTrigger
                            key="bottom"
                            placement="bottom"
                            overlay={
                                <Tooltip 
                                    variant="primary"
                                    id={`tooltip-bottom`} 
                                    style={{ 
                                        background: headingColor,
                                    }}
                                >
                                    <b>{hover1}</b>
                                    <br></br>
                                    <br></br>
                                    <p>{hover2}</p>
                                    <p>{hover3}</p> 
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
                            <Note 
                                columnId = {props.id} 
                                col = {props.col} 
                                columns = {props.columns} 
                                items = {items} 
                                key={element.id} 
                                id={element.id} 
                                intext={element.intext} 
                                handleColumn = {props.handleColumn} 
                                index = {index}
                            />
                        )}
                    </Container>

                    <Container>
                        <Form.Control 
                            className='form rounded-pill' 
                            value={text} 
                            onChange={handleChange} 
                            onBlur={handleAdd} 
                            onKeyPress={handleKeyPress} 
                            placeholder="Type here..." 
                            maxLength='16'
                            style={{
                                borderColor: headingColor
                            }}
                        />
                    </Container>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>

    );
}
 
export default Rectangle; 