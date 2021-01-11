import React, { Component } from 'react'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import { Burger } from '../../Components/Burger/Burger';
import BurgerIngredient from '../../Components/Burger/Burger Ingredient/BurgerIngredient';
import AuxComp from '../../hoc/AuxComp';

export class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={...}
    // }
    
state={
    ingredient :{
        salad:0 ,
         bacon:0,
         cheese:0,
         meat:0
    }
}

    render() {
        return (
            <AuxComp>
               <Burger ingredients={this.state.ingredient} />
                <BuildControls />
              
            </AuxComp>
            )
    }
}

export default BurgerBuilder;
