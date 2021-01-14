import React from "react";
import Circa2 from './Page5new';
import ReactToPrint from "react-to-print";

class Print extends React.Component {
  render() {
    return (
      <Circa2 />
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