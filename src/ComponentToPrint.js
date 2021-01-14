import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import { useLocation, Link } from "react-router-dom";
import Venn from './Venn';
import {DragDropContext} from 'react-beautiful-dnd';
import { Row, Modal } from 'react-bootstrap';
import BackButton from './components/BackButton';


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
    constructor(props){
      super(props)
      this.state = {
        show: false
      }
    }

    handleClose = (e) => {
      e.preventDefault()
      console.log('close before', this.show);
      this.show=false
      console.log('close after', this.show);
    }

    handleShow = (e) => {
      e.preventDefault()
      console.log('show before', this.show);
      this.show=true
      console.log('show after', this.show);
    }

    render() {
      return (
        <>
          <Modal show={this.props.show} onHide={this.handleClose}>
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
          <div className="btn-back">
            <Link
              to={{
                  pathname: "/u",
              }}
            >
              <BackButton onClick={this.handleShow}/>
            </Link>
          </div>
          <ComponentToPrint ref={(el) => (this.componentRef = el)} />
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
        </>
      );
    }
  }

export default Print;