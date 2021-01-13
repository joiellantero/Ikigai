import React, { Component, useRef } from 'react';
import { useLocation, Link } from "react-router-dom";
import "./style.css";
import { InputGroup, Row, Col, Container, Button, FormControl } from 'react-bootstrap';
import { render } from "react-dom";
import { useReactToPrint } from 'react-to-print';
import ReactToPrint from 'react-to-print';
import Twitter from './components/Twitter';
import Facebook from './components/Facebook';
import Linkedin from './components/Linkedin';
import Whatsapp from './components/Whatsapp';
import Trash from './components/trash';
import Add from './components/Add';
import Far from './Page4'
import Circle from './old_files/circle.js';
import CircleSVG from './components/CircleSVG';
import Hidden from './Hidden';

class Page5 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            newItem: "",
            list: [],
        }
    }

    addItem() {
        // create item with unique id
        if (!this.state.newItem.slice()){
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
        //const { state } = this.props.location
        //const filtered = Object.fromEntries(Object.entries({state}.state.columns).filter(([colId, col]) => colId !== 'add'))
        return(
            <>
                <div className="page-container-6 container">
                    <div className="btn-back">
                        <Link to="/lets-find-out-ikigai">
                            <Button variant="light">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1A1A1A" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <line x1="5" y1="12" x2="11" y2="18" />
                                    <line x1="5" y1="12" x2="11" y2="6" />
                                </svg>
                            </Button>
                        </Link>
                    </div>
                    <h3>Your Ikigai, Visualised.</h3>
                    <div className="row my-5">
                        <div className="col-lg">
                            <Row>
                                {/* <Col xs={9} className="venn-container p-0">
                                    {Object.entries(filtered).map(([columnId, column]) => {
                                        return (
                                            <Hidden
                                                key={columnId}
                                                id={columnId}
                                                col={column}
                                                columns={state}
                                                // handleColumn={setColumn}
                                                top = {column.top}
                                                left = {column.left}
                                                width = {column.width}
                                                maxWidth = {column.maxWidth}
                                                height = {column.height}>
                                            </Hidden>
                                        );
                                    })}
                                    <CircleSVG/>
                                </Col> */}
                                <Col >
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
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <button type="button" className="btn-default btn-2 btn-lg my-5">
                        Export Report
                    </button>

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

const Export= () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  
    return (
      <div>
        <Circa ref={componentRef} />
        <button onClick={handlePrint}>Print this out!</button>
      </div>
    );
  };

export default Export;
//export default Page5;
