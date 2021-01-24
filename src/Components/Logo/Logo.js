import React from 'react'
 import burgerLogo from '../../Assets/Images/download.png'
 import classes from './Logo.css'
const Logo = (props) => {
    return (
        <div className={classes.Logo} style={{height:props.height}}>
            <img src={burgerLogo} alt="Logo" />
        </div>
    )
}

export default Logo
