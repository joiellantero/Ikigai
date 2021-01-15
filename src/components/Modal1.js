import React, { useState } from 'react';
import '../../src/style.css';
import { render } from "react-dom";
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import Add from './Add';

// const ModalContent = (props) => {
//     return (
//         <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     Modal heading
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <h4>Centered Modal</h4>
//                 <p>
//                     Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//                     dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//                     consectetur ac, vestibulum at eros.
//                 </p>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button onClick={props.onHide}>Close</Button>
//             </Modal.Footer>
//         </Modal>
//     )
// };



function ModalContent() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button variant="btn-default btn-lg" onClick={handleShow}>
                +
            </Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Vocation</Modal.Title>
                </Modal.Header>
                <Modal.Body>This intersection represents your vocation. <br />
                What are some steps can you take to enjoy your vocation more?

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