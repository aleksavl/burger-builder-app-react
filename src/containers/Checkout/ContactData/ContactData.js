import React, { Component } from 'react';
import axios from '../../../axios-orders';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
      //alert("You continue");
      const order = {
        ingredients: this.props.ingredients,
        price: this.props.price,
        customer: {
          name: 'Aleksandar Stojanovic',
          address: {
            street: 'Test Street 1',
            zipCode: '3224234',
            country: "Serbia"
          },
          email: 'test@test.com'
        },
        deliveryMethod: 'fastest'
      }
      axios.post('/orders.json',order)
        .then(response => {
          this.setState({loading: false});
          this.props.history.push('/');
        })
        .catch(error => {this.setState({loading: false});});
  }

  render () {
    let form = (
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Your name"/>
        <input className={classes.Input} type="email" name="email" placeholder="Your Mail"/>
        <input className={classes.Input} type="text" name="street" placeholder="Your Street"/>
        <input className={classes.Input} type="email" name="postal" placeholder="Your Postal Code"/>
        <Button
          btnType="Success"
          clicked={this.orderHandler}>
          ORDER</Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
