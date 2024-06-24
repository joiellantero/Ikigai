import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import { useLocation, Link } from "react-router-dom";
import { DragDropContext } from 'react-beautiful-dnd';
import { Modal } from 'react-bootstrap';
import {MODAL_DATA, CIRCLE_DATA} from './components/GlobalVar';
import Venn from './components/Venn';
import Logo from './components/CS_Logo';
import BackButton from './components/BackButton';

import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from "react-share";


const Intermediate = () => {
    let { columns, filtered, modals } = useLocation();
    const { setColumn, onDragEnd } = useLocation();

    if (!columns) {
        modals =  MODAL_DATA;
        columns =  CIRCLE_DATA;

        filtered = Object.fromEntries(Object.entries(columns).filter(([colId]) => colId !== 'add'))
    }
    return (
        <div className="venn-diagram">
            <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumn)}>
                <div className="page-break">
                    <Venn filtered={filtered} columns={columns} setColumn={setColumn} />
                    <br/>
                    <h5 className="subtitle my-5 text-center"> Steps to Ikigai</h5>
                    <div className="export-steps-container">
                        {Object.entries(modals).filter(([id, modal]) => modal.items.length > 0).map(([id, modal]) => {
                            return (
                                <div key={id}> 
                                    <h5>{id}</h5>
                                    {modal.items.map((item)=>{
                                        return (
                                            <p key={item.id}>- {item.intext}</p>
                                        )}    
                                    )}
                                </div>
                            )}
                        )}
                    </div>
                </div>
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

class Export extends Component {
    constructor(props) {
        super(props);
        window.localStorage.clear();
        this.state = {
            newItem: "",
            list: [],
        }
    }

    state = {
        showModal: false
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }


    render() {

        return (
            <div className="page-container-6" >
                <Logo />
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
                <div className="container">
                    <div className="btn-back">
                        <Link
                            to={{
                                pathname: "/your-ikigai-chart",
                            }}
                        >
                            <BackButton onClick={this.toggleModal} />
                        </Link>
                    </div>
                    <p className="subtitle">Your Ikigai, Visualised</p>
                    <div className="page-print">
                        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
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
                        documentTitle="Your_ikigai"
                    />

                    <div className="card card-shadow mt-5">
                        <div className="card-body">
                            <div className="share-container container">
                                <p>Share:</p>
                                <ul>
                                    <li className="hvr-float">
                                        <FacebookShareButton
                                            url={"https://u.careersocius.com/ikigai"}
                                            quote={"Find out your ikigai here"}
                                        >
                                            <FacebookIcon size={32} round />
                                        </FacebookShareButton>
                                    </li>
                                    <li className="hvr-float">
                                        <TwitterShareButton
                                            url={"https://u.careersocius.com/ikigai"}
                                            quote={"Find out your ikigai here"}
                                        >
                                            <TwitterIcon size={32} round />
                                        </TwitterShareButton>
                                    </li>
                                    <li className="hvr-float">
                                        <LinkedinShareButton
                                            url={"https://u.careersocius.com/ikigai"}
                                            quote={"Find out your ikigai here"}
                                        >
                                            <LinkedinIcon size={32} round />
                                        </LinkedinShareButton>
                                    </li>
                                    <li className="hvr-float">
                                        <WhatsappShareButton
                                            url={"https://u.careersocius.com/ikigai"}
                                            quote={"Find out your ikigai here"}
                                        >
                                            <WhatsappIcon size={32} round />
                                        </WhatsappShareButton>
                                    </li>
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
            </div>
        );
    }
}

export default Export;