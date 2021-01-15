import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import { useLocation, Link } from "react-router-dom";
import Venn from './Venn';
import {DragDropContext} from 'react-beautiful-dnd';
import { Row, Modal } from 'react-bootstrap';
import BackButton from './components/BackButton';
import { v4 } from 'uuid';


const Intermediate  = () => {
  let {columns} = useLocation();
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
                width: '90px',
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
                left: '616px',
                width: '88px',
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
                width: '119px',
                maxWidth: '150px',
                height: '125px'
            },
            [v4()]: {
                id: 'r9',
                name: '', // red yellow
                items: [],
                top: '230px',
                left: '460px',
                width: '132px',
                maxWidth: '150px',
                height: '127px'
            },
        };
	}

  return (
     <div className="venn-diagram" style={{ display: 'table', margin: '0 auto' }}>
        <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumn)}>
            <Row className="row-container">
                <Venn filtered = {columns} columns ={columns} setColumn = {setColumn}/>
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
              <BackButton/>
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