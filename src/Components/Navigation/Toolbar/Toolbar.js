import React from "react";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../../SideDrawer/DrawerToggle/DrawerToggle";
import NevigationItems from "./NevigationItems/NevigationItems";
import classes from "./Toolbar.css";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo height="80%" />
      </div>
      <nav className={classes.DesktopOnly}>
        <NevigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
