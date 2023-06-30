import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad", price: 0.5 },
  { label: "Bacon", type: "bacon", price: 0.4 },
  { label: "Cheese", type: "cheese", price: 1.3 },
  { label: "Meat", type: "meat", price: 0.7 },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((el) => (
      <BuildControl
        key={el.label}
        label={el.label}
        added={() => props.ingredientAdded(el.type)}
        removed={() => props.ingredientRemoved(el.type)}
        disabled={props.disabled[el.type]}
        pricePerIngredient = {el.price}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}>
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
