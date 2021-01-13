import React from "react";
import Circa from './u';
import ReactToPrint from "react-to-print";
import { useLocation, Link } from "react-router-dom";

const ref = React.createRef();

class Print extends React.Component {
    render() {
      return (
        <Circa/>
        );
    }
  }

class Example extends React.Component {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
            content={() => this.componentRef}
          />
          <Print ref={(el) => (this.componentRef = el)} />
        </div>
      );
    }
  }

export default Example;