import React, { useState } from 'react';
import '../../src/style.css';
import { render } from "react-dom";
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import Add from './Add';


function ModalContent() {

    const [data2, setData] = useState(null)

    function getData(val) {
        setData(val.target.value)
        // console.warn(val.target.value)
    }
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
                    <Modal.Title>Profession</Modal.Title>
                </Modal.Header>
                <Modal.Body>This intersection represents your profession. <br />
                In your profession, how can you help the people and <br /> community around you?
                <p> {data2} </p>

                    <InputGroup size="sm" className="mb-3" onChange={getData}>
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