import React from "react";
import AuxComp from "../../hoc/AuxComp";
import Logo from "../Logo/Logo";
import NevigationItems from "../Navigation/Toolbar/NevigationItems/NevigationItems";
import Backdrop from "../UI/Backdrop/Backdrop";
import classes from "./SideDrawer.css";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <AuxComp>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
          {/* another way to make responsive size of logo using props :  height="11%" */}
        </div>
        <nav>
          <NevigationItems />
        </nav>
      </div>
    </AuxComp>
  );
};

export default SideDrawer;
