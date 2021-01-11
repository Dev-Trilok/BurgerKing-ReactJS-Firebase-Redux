import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl';

const controls =[
    {label :'Salad', types:'salad'},
    {label :'Bacon', types:'bacon'},
    {label :'Cheese', types:'cheese'},
    {label :'Meat', types:'meat'},
];

 const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl=>( 
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
 );

export default BuildControls;