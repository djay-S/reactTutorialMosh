import React, { Component } from 'react';
import './App.css';
import Cart from './components/cart';
import Navbar from './components/navbar';

class App extends Component {

  state = {
    cart: [
      { id: 1, count: 0, name: 'Spells' },
      { id: 2, count: 0, name: 'Armour' },
      { id: 3, count: 0, name: 'Weapons' },
      { id: 4, count: 3, name: 'Potions' },
      { id: 5, count: 0, name: 'Scrolls' }
    ]
  }

  handleDelete = (itemId) => {
    // console.log('Counter Deleted:', itemId)
    if (itemId.count > 0) {
      const cart = [...this.state.cart];
      cart.forEach(item => {
        if (item.id === itemId) {
          item.count = 0;
        }
      })
    }
    const cart = this.state.cart.filter(item => item.id !== itemId)
    this.setState({ cart })
  }

  handleAdd = (item) => {
    const cart = [...this.state.cart];
    const index = cart.indexOf(item);
    cart[index] = { ...item };
    cart[index].count++;
    this.setState({ cart });
    console.log(item);
  }

  handleRemove = (item) => {
    const cart = [...this.state.cart];
    const index = cart.indexOf(item);
    cart[index] = { ...item };
    if (cart[index].count > 0)
      cart[index].count--;
    else
      cart[index].count = 0;
    this.setState({ cart });
    console.log('Remove', item);
  }

  handleReset = () => {
    const cart = this.state.cart.map(item => {
      item.count = 0
      return item;
    });
    this.setState({ cart })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalItems={this.state.cart.filter(item => item.count > 0).length}
        />
        <main className="container-fluid">
          <Cart
            cart={this.state.cart}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onRemove={this.handleRemove}
            onAdd={this.handleAdd} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
