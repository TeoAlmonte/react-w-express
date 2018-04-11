import React, { Component } from 'react';

import './customers.css';

class Customers extends Component {

  constructor() {
    super();
    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, console.log('Customers fetched..', customers)))
  }

  render() {
    return (
      <div className="customers">
        <h2> This Customer </h2>
        {this.state.customers.map(customer =>
        <li key={customer.id}> {customer.customer} with {customer.id} </li>
        )}
      </div>
    );
  }
}

export default Customers;
