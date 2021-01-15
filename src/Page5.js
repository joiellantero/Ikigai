import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import { useLocation, Link } from "react-router-dom";
import {DragDropContext} from 'react-beautiful-dnd';

import { Col, Row, Modal, InputGroup, FormControl, Button } from 'react-bootstrap';

import Venn from './Venn';
import BackButton from './components/BackButton';
import Twitter from './components/Twitter';
import Facebook from './components/Facebook';
import Linkedin from './components/Linkedin';
import Whatsapp from './components/Whatsapp';
import Trash from './components/trash';
import Add from './components/Add';


const Intermediate  = () => {
  const { columns, filtered, setColumn, onDragEnd }  = useLocation();


  return (
     <div className="venn-diagram" style={{ display: 'table', margin: '0 auto' }}>
        <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumn)}>
            <Row className="row-container">
                <Venn filtered = {filtered} columns ={columns} setColumn = {setColumn}/>
            </Row>
        </DragDropContext>
     </div>
    );
}

class ComponentToPrint extends Component {
    render() {
      return (
        <Intermediate />
        );
    }
}

class Print extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: "",
            list: [],
        }
    }

    addItem() {
        // create item with unique id
        if (!this.state.newItem.slice()) {
            return;
        }

        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        const list = [...this.state.list];

        list.push(newItem);

        this.setState({
            list,
            newItem: ""
        })
    }

    deleteItem(id) {
        const list = [...this.state.list];
        const updatedList = list.filter(item => item.id !== id);
        this.setState({ list: updatedList });
    }

    handleInputChange = (key, value) => {
        this.setState({
            [key]: value
        });
    }

    render() {
      return (
        <>
            <Modal show={this.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Going back to the previous page will erase your progress? Do you want to begin from scratch?</Modal.Body>
                <Modal.Footer>
                    <button className="btn-default btn-lg" onClick={this.handleClose}>
                        No
                    </button>
                    <Link
                        to={{
                            pathname: "/lets-find-out-ikigai",
                            // cols: columns
                        }}
                    >
                        <button className="btn-secondary btn-lg">
                            Yes
                        </button>
                    </Link>
                </Modal.Footer>
            </Modal>
            <div className="page-container-6 container">
                <div className="btn-back">
                    <Link
                    to={{
                        pathname: "/u",
                    }}
                    >
                    <BackButton onClick={this.handleShow}/>
                    </Link>
                </div>
                <p className="subtitle">Your Ikigai, Visualised</p>
                <div className="row my-5">
                    <div className="col-lg">
                        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
                        <div className="col-lg">
                            <div className="steps-container container">
                                <ul>
                                    {this.state.list.map(item => {
                                        return (
                                            <li key={item.id}>
                                                {item.value}
                                                <button className="btn-delete" onClick={() => this.deleteItem(item.id)}><Trash /></button>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <InputGroup>
                                    <FormControl
                                        placeholder="Enter step..."
                                        aria-label="Enter step..."
                                        aria-describedby="basic-addon2"
                                        className="steps-input"
                                        name="step"
                                        value={this.state.newItem}
                                        onChange={e => this.handleInputChange("newItem", e.target.value)}
                                        onKeyPress={e => e.key === "Enter" && this.addItem()}
                                    />
                                    <InputGroup.Append>
                                        <Button className="btn-add" onClick={() => this.addItem()} disabled={!this.state.newItem}><Add /></Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </div>
                        </div>
                    </div>
                </div>

                <ReactToPrint
                    trigger={() => (
                    <div className="btn-container-center">
                        <button type="button" className="btn-default btn-2 btn-lg btn-width-fit">
                            Export Report
                        </button>
                    </div>
                    )}
                    content={() => this.componentRef}
                    documentTitle="Venn_PDF"
                />

                <div class="card card-shadow mt-5">
                    <div class="card-body">
                        <div className="share-container container">
                            <p>Share:</p>
                            <ul>
                                <li className="hvr-float"><a href="https://twitter.com/" target="__blank"><Twitter /></a></li>
                                <li className="hvr-float"><a href="https://facebook.com/" target="__blank"><Facebook /></a></li>
                                <li className="hvr-float"><a href="https://linkedin.com/" target="__blank"><Linkedin /></a></li>
                                <li className="hvr-float"><a href="https://whatsapp.com/" target="__blank"><Whatsapp /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <p>
                        Achieving Ikigai is a challenging process.<br />
                        Your pursuit of Ikigai should draw you closer to a particular cause, skill, or people networks.<br /><br />

                        All the best in your pursuit of ikigai!
                    </p>
                </div>
            </div>
        </>
      );
    }
  }

export default Print;