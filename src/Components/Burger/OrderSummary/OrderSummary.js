import React from "react";
import AuxComp from "../../../hoc/AuxComp";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li>
        <span style={{ textTransform: "capitalize" }}>{igKey} </span>:
        {props.ingredients[igKey]}{" "}
      </li>
    );
  });
  return (
    <AuxComp>
      <div>
        <h3>Your Order</h3>
        <p> delicioys burger with the following Ingredient : </p>
        <ul> {ingredientSummary} </ul>
        <p><strong>Total Price : $ {props.price} </strong> </p>
        <p> Continue to checkout </p>
        <Button btnType="Danger" clicked={props.purchaseCanceled}>
          {" "}
          Cancel
        </Button>

        <Button btnType="Success" clicked={props.purchaseContinued}>
          Continue{" "}
        </Button>
      </div>
    </AuxComp>
  );
};

export default OrderSummary;
