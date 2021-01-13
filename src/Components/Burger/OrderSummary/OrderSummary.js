import React from 'react'
import AuxComp from '../../../hoc/AuxComp'


const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey=>{
        return<li><span style={{textTransform:'capitalize'}}>{igKey} </span>:{props.ingredients[igKey]} </li>
    })
    return (
       <AuxComp>
       <div>
            <h3>Your Order</h3>
            <p> delicioys burger with the following Ingredient : </p>
    <ul> {ingredientSummary} </ul>
    <p> Continue to checkout </p>
        </div>
        </AuxComp>
    )
}

export default OrderSummary
