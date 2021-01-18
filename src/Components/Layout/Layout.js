import React from 'react'
import AuxComp from '../../hoc/AuxComp';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import classes from './Layout.module.css'


const Layout = (props) => (
    <AuxComp>
        <div>
            <Toolbar />
            <SideDrawer />
           
        </div>
        <main className={classes.content}> 
            {props.children}
        </main>
        </AuxComp>
);

export default Layout;