import React, { useState } from 'react';
import '../../src/style.css';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import Add from './Add';
import { v4 } from 'uuid';
import Trash from './trash';

function ModalSteps(props) {
    const { modal, modals, setModals, id } = props;

    const [text, setText] = useState('')
    const [show, setShow] = useState(false);
    const inputField = React.useRef(null);

    const handleClose = () => {
        handleAdd();
        setShow(false)
    }
    
    const handleShow = () => {
        setShow(true);
        setTimeout(()=>{inputField.current && inputField.current.focus()}, 1);
    }

    const [isShown, setIsShown] = useState(false);

    function handleChange(event) {
        event.preventDefault()
        setText(event.target.value);
    }

    function handleAdd() {
        if (!text) {
            return;
        }

        const newList = modal.items.concat({ id: v4(), intext: text });
        const newModals = {
            ...modals,
            [id]: {
                ...modal,
                items: newList
            }
        };

        setModals(newModals);
        setText('');
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            if (!text) {
                return;
            }
        
            handleAdd();
        }
    }

    const deleteStep = (stepId) => {
        const deleted = (modal.items.filter((step) => step.id !== stepId))

        const newModals = {
            ...modals,
            [id]: {
                ...modal,
                items: deleted
            }
        };

        setModals(newModals);
    }
    return (
        <>
            <button className="btn-modal" onClick={handleShow} style = {{ top: modal.top, left: modal.left }}>
                <Add color={modal.items.length === 0 ? "grey" : "green"}/>
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{modal.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modal.body1}<br />
                    {modal.body2}<br /><br />
                
                    {modal.items.map((step, index)=>{
                        return (
                            <div 
                                className="step-input my-2"
                                onMouseEnter={() => setIsShown(true)}
                                key={step.id}
                            >
                                {index+1}. {step.intext}

                                {isShown && (
                                    <span className="btn-delete-container-2" onClick={() => deleteStep(step.id)}>
                                        <Trash />
                                    </span>
                                )}
                            </div>
                        )})
                    }

                    <div className="steps-container my-4">
                        <InputGroup>
                            <FormControl
                                placeholder="Enter step..."
                                aria-label="Enter step..."
                                aria-describedby="basic-addon2"
                                className="steps-input"
                                name="step"
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                                ref={inputField}
                                value = {text}
                            />
                            <InputGroup.Append>
                                <Button className="btn-add" onClick={handleAdd} disabled={!text}><Add /></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn-default btn-lg" onClick={handleClose}>
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalSteps;