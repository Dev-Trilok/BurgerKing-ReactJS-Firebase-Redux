import React from 'react'
import Logo from '../Logo/Logo'
import NevigationItems from '../Navigation/Toolbar/NevigationItems/NevigationItems'
import classes from './SideDrawer.css'

const SideDrawer = () => {
    return (
        <div className={classes.SideDrawer}>
           <div className={classes.Logo}>
            <Logo />   {/* another way to make responsive size of logo using props :  height="11%" */}
            </div>
            <nav>
                <NevigationItems />
            </nav>
        </div>
    )
}

export default SideDrawer
