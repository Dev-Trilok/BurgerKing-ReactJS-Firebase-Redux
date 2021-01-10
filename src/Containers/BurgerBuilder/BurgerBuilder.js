import React, { Component } from 'react'
import AuxComp from '../../hoc/AuxComp';

export class BurgerBuilder extends Component {
    render() {
        return (
            <AuxComp>
                <div>
                    Burger
                </div>
                <div>
                    Build Control
                </div>
            </AuxComp>
            )
    }
}

export default BurgerBuilder;
