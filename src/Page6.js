import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import { useLocation, Link } from "react-router-dom";
import {DragDropContext} from 'react-beautiful-dnd';
import { v4 } from 'uuid';

import { Modal, InputGroup, FormControl, Button } from 'react-bootstrap';

import Venn from './components/Venn';
import Logo from './components/CS_Logo';
import BackButton from './components/BackButton';
import Twitter from './components/Twitter';
import Facebook from './components/Facebook';
import Linkedin from './components/Linkedin';
import Whatsapp from './components/Whatsapp';
import Trash from './components/trash';
import Add from './components/Add';


const Intermediate  = () => {
  let {columns, filtered} = useLocation();
  const { setColumn, onDragEnd }  = useLocation();
  
  if (!columns){
      columns = {
        [v4()]: {
            id: 'r1',
            name: 'what you can be PAID FOR',
            items: [],
            top: '118px',
            left: '254px',
            width: '283px',
            maxWidth: '283px',
            height: '82px',
        },
        [v4()]: {
            id: 'r2',
            name: 'what the WORLD NEEDS',
            items: [],
            top: '292px',
            left: '46px',
            width: '130px',
            maxWidth: '150px',
            height: '258px'
        },
        [v4()]: {
            id: 'r3',
            name: 'what you LOVE',
            items: [],
            top: '642px',
            left: '259px',
            width: '271px',
            maxWidth: '283px',
            height: '89px'
        },
        [v4()]: {
            id: 'r4',
            name: 'what you are GOOD AT',
            items: [],
            top: '291px',
            left: '614px',
            width: '125px',
            maxWidth: '150px',
            height: '261px'
        },
        [v4()]: {
            id: 'r5',
            name: '', // blue yellow
            items: [],
            top: '223px',
            left: '199px',
            width: '128px',
            maxWidth: '150px',
            height: '134px'
        },
        [v4()]: {
            id: 'r6',
            name: '', // green blue
            items: [],
            top: '490px',
            left: '198px',
            width: '129px',
            maxWidth: '150px',
            height: '130px'
        },
        [v4()]: {
            id: 'r7',
            name: '', // green red
            items: [],
            top: '497px',
            left: '461px',
            width: '134px',
            maxWidth: '150px',
            height: '128px'
        },
        [v4()]: {
            id: 'r8',
            name: '', // center
            items: [],
            top: '362px',
            left: '325px',
            width: '132px',
            maxWidth: '150px',
            height: '125px'
        },
        [v4()]: {
            id: 'r9',
            name: '', // red yellow
            items: [],
            top: '223px',
            left: '458px',
            width: '144px',
            maxWidth: '150px',
            height: '134px',
        },
        'add': {
            id: 'r10',
            name: '', // add activity
            items: [],
            top: '',
            left: '',
            width: '',
            height: ''
        },
    };
      filtered = Object.fromEntries(Object.entries(columns).filter(([colId]) => colId !== 'add'))
  }

  return (
     <div className="venn-diagram">
        <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumn)}>
            <div className="page-break">
                <Venn filtered = {filtered} columns ={columns} setColumn = {setColumn}/>
            </div>
        </DragDropContext>
     </div>
    );
}

class ComponentToPrint extends Component {
    render() {
        return (
            <Intermediate/>
        ); 
    }
}

class Export extends Component {
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

    state={
        showModal: false
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <>
                <Logo/>
                <Modal show={this.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Going back to the previous page will erase your progress? Do you want to begin from scratch?</Modal.Body>
                    <Modal.Footer>
                        <button className="btn-default btn-lg" onClick={this.toggleModal}>
                            No
                        </button>
                        <Link
                            to={{
                                pathname: "/your-ikigai-chart",
                            }}
                        >
                            <button className="btn-secondary btn-lg">
                                Yes
                            </button>
                        </Link>
                    </Modal.Footer>
                </Modal>
                <Logo />
                <div className="page-container-6 container">
                    <div className="btn-back">
                        <Link
                            to={{
                                pathname: "/your-ikigai-chart",
                            }}
                        >
                            <BackButton onClick={this.toggleModal}/>
                        </Link>
                    </div>
                    <p className="subtitle">Your Ikigai, Visualised</p>
                    <div className="page-print">
                        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
                    </div>
                    {/* <div className="steps-container container my-5">
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
                    </div> */}

                    <ReactToPrint
                        trigger={() => (
                        <div className="btn-container-center">
                            <button type="button" className="btn-default btn-2 btn-lg btn-width-fit">
                                Export Report
                            </button>
                        </div>
                        )}
                        content={() => this.componentRef}
                        documentTitle="Your_ikigai"
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

                    <div className="container end">
                        <p>Achieving Ikigai is a challenging process.</p>
                        <p>Your pursuit of Ikigai should draw you closer to a particular cause, skill, or people networks.</p>
                        <br />
                        <p> All the best in your pursuit of ikigai!</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Export;