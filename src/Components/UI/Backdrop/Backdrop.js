import React from 'react'
import classses from './Backdrop.css'

const Backdrop = (props) => 
     (
        props.show ? <div className={classses.Backdrop} onClick={props.clicked}> </div> : null
    );


export default Backdrop;
