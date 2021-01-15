import React from "react";
import AuxComp from "../../../hoc/AuxComp";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Modal.css";
const Modal = (props) => {
  return (
    <AuxComp>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-1000vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </AuxComp>
  );
};

export default Modal;
