import React, { Component } from "react";
import AuxComp from "../../../hoc/AuxComp";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.css";

class Modal extends Component {
shouldComponentUpdate(nextProps, nextState) {
  return nextProps.show!== this.props.show || nextProps.children !==this.props.children;
}
componentWillUpdate() {
  console.log('Modal update');
}

  render() {
    return (
      <AuxComp>
        <Backdrop 
          show={this.props.show} 
          clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-1000vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </AuxComp>
    );
  }
}

export default Modal;
