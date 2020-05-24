import React, { Component } from 'react';
import Counter from './item';

class Cart extends Component {

    render() {

        const {onReset, cart, onDelete, onAdd, onRemove} = this.props;

        return (
            <div>
                <button className='btn btn-primary btn-sm m-2' onClick={onReset}>Reset</button>
                {cart.map(item => <Counter
                    key={item.id}
                    item={item}
                    onDelete={() => onDelete(item.id)}
                    onAdd={() => onAdd(item)}
                    onRemove={() => onRemove(item)}
                />)}
            </div>
        );
    }
}

export default Cart;