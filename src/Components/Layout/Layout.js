import React from 'react'
import AuxComp from '../../hoc/AuxComp';
import classes from './Layout.module.css'


const Layout = (props) => (
    <AuxComp>
        <div>
            Toolbar, sidebar, backdrop
        </div>
        <main className={classes.content}> 
            {props.children}
        </main>
        </AuxComp>
);

export default Layout;