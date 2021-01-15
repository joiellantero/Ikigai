import React, { useState } from 'react';
import '../../src/style.css';
import { render } from "react-dom";
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import Add from './Add';


function ModalContent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button variant="btn-default btn-lg" onClick={handleShow}>
                <Add />
            </Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Passion</Modal.Title>
                </Modal.Header>
                <Modal.Body>This intersection represents your passion. <br />
                Are you able to turn your passion into something you can be paid for?

                <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>

                </Modal.Body>
                <Modal.Footer>

                    <button type="button" className="btn-secondary btn-lg" onClick={handleClose}>
                        Close
                </button>

                    <button type="button" className="btn-default btn-lg" onClick={handleClose}>
                        Save
                </button>


                </Modal.Footer>
            </Modal>

        </>
    );
}

//render(<ModalContent />);

export default ModalContent;