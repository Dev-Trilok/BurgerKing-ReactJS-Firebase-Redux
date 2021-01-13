import React from "react";
import BurgerIngredient from "./Burger Ingredient/BurgerIngredient";
import clasees from "./Burger.module.css";

export const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  })
  .reduce((arr, el)=>{
      return arr.concat(el);
  }, []);

  if(transformedIngredients.length===0){
      transformedIngredients=<p>plx start adding ingredients</p>
  }
  return (
    <div className={clasees.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
