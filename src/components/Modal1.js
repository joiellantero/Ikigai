import React, { useState } from 'react';
import '../../src/style.css';
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import Add from './Add';


function ModalContent(props) {

    const [text, setText] = useState('')

    function handleChange(event) {
        event.preventDefault()
        setText(event.target.value);
    }

    function handleAdd() {
        if (!text) {
            return;
        }
        const newList = props.modals['vocation'].items.concat(text);
        const newModals = {
            ...props.modals,
            'vocation': {
                ...props.modals['vocation'],
                items: newList
            }
        };

        props.setModals(newModals);
        setText('');
        setShow(false);
    }

    // function getData(val) {
    //     setData(val.target.value)
    //     // console.warn(val.target.value)
    // }

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
                    <Modal.Title>{props.modals['vocation'].name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.modals['vocation'].body1}<br />
                {props.modals['vocation'].body2}<br /><br />
                
                {props.modals['vocation'].items.map((step)=>{
                    return <p>--{step}</p>;
                    })
                }

                    <input type="text" onChange={handleChange} />
                    {/* <InputGroup size="sm" className="mb-3" onChange={getData}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup> */}

                </Modal.Body>
                <Modal.Footer>

                    <button type="button" className="btn-secondary btn-lg" onClick={handleClose}>
                        Close
                    </button>
                    <button type="button" className="btn-default btn-lg" onClick={handleAdd}>
                        Save
                    </button>


                    {/* <Link
                        to={{
                            pathname: "/export",
                            data1: data1
                        }}
                    >
                        {console.log(data1)}
                    </Link> */}

                </Modal.Footer>
            </Modal>

        </>
    );
}

//render(<ModalContent />);

export default ModalContent;