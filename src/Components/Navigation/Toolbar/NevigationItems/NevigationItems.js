import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NevigationItems.css'

const NevigationItems = (props) => {
    return (
       <ul className={classes.NevigationItems}>
           <NavigationItem link="/" active>Burger king</NavigationItem>
           <NavigationItem link="/"> Checkout</NavigationItem>

       </ul>
    )
}

export default NevigationItems
