import React, { useState } from 'react';
import { Container, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { v4 } from 'uuid';
import Info from '../components/info.js';
import { Droppable } from 'react-beautiful-dnd';
import Note from '../Note';


const Rectangle = (props)=> {
    const {heading1, heading2, color, headingColor, hover1, hover2, hover3, items} = props.col;

    const [text, setText] = useState('');

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
                            <Note 
                            columnId = {props.id} 
                            col = {props.col} 
                            columns = {props.columns} 
                            items = {items} key={element.id} 
                            id={element.id} 
                            intext={element.intext} 
                            handleColumn = {props.handleColumn} 
                            index = {index}></Note>
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