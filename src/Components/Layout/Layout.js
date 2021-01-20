import React from "react";
import AuxComp from "../../hoc/AuxComp";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import classes from "./Layout.module.css";

class Layout extends React.Component {
 state={
     showSideDrawer:false
 }

    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
 } 
sideDrawerToggleHandler =()=>{
  this.setState((prevState)=>{
    return {showSideDrawer: !prevState.showSideDrawer}
  })
}

    render() {
    return (
      <AuxComp>
        
          <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
          <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        
        <main  className={classes.content}
                >{this.props.children}</main>
      </AuxComp>
    );
  }
}

export default Layout;
