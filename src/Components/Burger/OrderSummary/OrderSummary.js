import React from "react";
import AuxComp from "../../../hoc/AuxComp";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
  componentWillUpdate() {
    console.log('[OrderSummary] will update');
  }
  
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li>
            <span style={{ textTransform: "capitalize" }}>{igKey} </span>:
            {this.props.ingredients[igKey]}{" "}
          </li>
        );
      }
    );
    return (
      <AuxComp>
        <div>
          <h3>Your Order</h3>
          <p> delicioys burger with the following Ingredient : </p>
          <ul> {ingredientSummary} </ul>
          <p>
            <strong>Total Price : $ {this.props.price} </strong>{" "}
          </p>
          <p> Continue to checkout </p>
          <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
            Cancel
          </Button>

          <Button btnType="Success" clicked={this.props.purchaseContinued}>
            Continue
          </Button>
        </div>
      </AuxComp>
    );
  }
}

export default OrderSummary;
