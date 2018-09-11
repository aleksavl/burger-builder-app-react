import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  //This could be functional component
  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map((igKey,i) => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
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
        <p><strong>Total price: {this.props.price.toFixed(2)} $</strong></p>
        <p>Continue to checkout?</p>
        <Button
          btnType="Danger"
          clicked={this.props.purchaseCanceled}>
          Cancel
        </Button>
        <Button
          btnType="Success"
          clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
