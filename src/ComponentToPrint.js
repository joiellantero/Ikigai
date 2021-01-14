import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import { useLocation } from "react-router-dom";
import Venn from './Venn';
import {DragDropContext} from 'react-beautiful-dnd';
import { Row } from 'react-bootstrap';

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
    render() {
      return (
        <div>
          <ComponentToPrint ref={(el) => (this.componentRef = el)} />
          <ReactToPrint
            trigger={() => (
              <button type="button" className="btn-default btn-2 btn-lg">
                  Export Report
              </button>
            )}
            content={() => this.componentRef}
            documentTitle="Venn_PDF"
          />
        </div>
      );
    }
  }

export default Print;