import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map((igKey,i) => {
    return (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    )
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>Delicious burger with following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price: {props.price.toFixed(2)} $</strong></p>
      <p>Continue to checkout?</p>
      <Button
        btnType="Danger"
        clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button
        btnType="Success"
        clicked={props.purchaseContinued}>
        Continue
      </Button>
    </React.Fragment>
  );
};

export default orderSummary;
