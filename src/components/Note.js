import React from 'react';
import { EditText } from 'react-edit-text';
import Trash from './trash';
import { Draggable } from 'react-beautiful-dnd';


const Note = (props) => {
    const items = props.items;

    const handleEdit = ({name, value}) => {
        if (!value){
            deleteNote(name);
        }
        
        else{
            const newList = Array.from(items)

            for (let i = 0; i < newList.length; i++){
                if (name === newList[i].id){
                    newList[i].intext = value;
                }
            }
    
            const newColumns = {
                ...props.columns,
                [props.columnId]: {
                  ...props.col,
                  items: newList
                }
              };
    
            props.handleColumn(newColumns);
        }
    }

    const deleteNote = (id) => {
        const deleted = (items.filter((note) => note.id !== id))

        const newColumns = {
            ...props.columns,
            [props.columnId]: {
                ...props.col,
                items: deleted
            }
        };

        props.handleColumn(newColumns);
    }

    return (
        <>
            <Draggable draggableId = {props.id} key = {props.id} index ={props.index}>
                {(provided, snapshot)=>(
                    <div 
                        className='rounded-pill with-btn-delete draggable' 
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

                        <span className="btn-delete-container" onClick={() => deleteNote(props.id)}>
                            <Trash />
                        </span>
                    </div>
                )}
            </Draggable>
        </>
    );
}

export default Note;