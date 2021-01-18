import React from 'react';
import { Droppable } from "react-beautiful-dnd";
import { v4 } from 'uuid';

import { Form } from 'react-bootstrap';

import Note from './Note';

const AddActivity = (props) => {
    const { columns, setColumn } = props;
    const [text, setText] = React.useState('');

    function handleChange(event) {
        event.preventDefault()
        setText(event.target.value);
    }

    function handleAdd() {
        if (!text) {
            return;
        }
        const newList = columns['add'].items.concat({ id: v4(), intext: text });
        const newColumns = {
            ...columns,
            'add': {
                ...columns['add'],
                items: newList
            }
        };

        setColumn(newColumns);
        setText('');
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (!text) {
                return;
            }

            const newList = columns['add'].items.concat({ id: v4(), intext: text });
            const newColumns = {
                ...columns,
                'add': {
                    ...columns['add'],
                    items: newList
                }
            };

            setColumn(newColumns);
            setText('');
        }
    }
    return (
        <Droppable droppableId='add'>
            {(provided) => (
                <>
                    <div ref={provided.innerRef} {...provided.droppableProps}>
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
                                columnId='add'
                                col={columns['add']}
                                columns={columns}
                                items={columns['add'].items}
                                key={element.id}
                                id={element.id}
                                intext={element.intext}
                                handleColumn={setColumn}
                                index={index}
                            />
                        )}
                    </div>
                </>
            )}
        </Droppable>
    )
}

export default AddActivity;