import React from 'react';
import {Droppable} from "react-beautiful-dnd";
import Note from './Note'

const Hidden = (props)=>{
    const {id, col, columns, top, left, width, maxWidth, height, handleColumn} = props;

    return (
        <Droppable droppableId = {id} >
            {(provided, snapshot)=> (
                <div 
                    className="hid" 
                    ref = {provided.innerRef} {...provided.droppableProps} 
                    style = {{
                        border: snapshot.isDraggingOver ? '2px solid green' : '',
                        top: top,
                        left: left,
                        minWidth: width,
                        maxWidth: maxWidth,
                        height: height
                    }}
                >
                    {provided.placeholder}
                        { col.items.map((note, index) => 
                            <Note 
                                columnId = {id}
                                col = {col} 
                                columns = {columns} 
                                items = {col.items} 
                                key={note.id} 
                                id={note.id} 
                                intext={note.intext} 
                                handleColumn = {handleColumn} 
                                index = {index}
                            />
                        )}
                </div>
            )}
        </Droppable>
    );
}


export default Hidden;