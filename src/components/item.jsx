import React, { Component } from 'react';

class Item extends Component {
    // state = {
    //     count: this.props.item.count
    //     // myList: ['expeto', 'patronum', 'avara', 'kadavra', 'stupefy', 'reducio', 'eatSlugs']
    // };

    countBadge = () => {
        let badge = 'badge m-2 badge-'
        return (badge += this.props.item.count === 0 ? 'secondary' : 'success');
    }

    deleteButtonState = () => {
        let buttonClassName = 'btn btn-sm m-2 btn-'
        return ( buttonClassName += this.props.item.count > 0 ? 'secondary' : 'danger')
    }

    deleteButtonText = () => {
        return (this.props.item.count > 0 ? 'Reset' : 'Delete')
    }

    render() {
        console.log('props', this.props)
        return (
            <div>
                {/* <h1>Hello from the other side.</h1> */}
                <span className={this.countBadge()}>{this.props.item.count}</span>
                <span style={{ fontSize: 20 }} className='align-middle'>{this.props.item.name}</span>
                <button className='btn btn-primary btn-sm m-2' onClick={() => this.props.onAdd(this.props.item)}>Add</button>
                <button className='btn btn-primary btn-sm m-2' onClick={() => this.props.onRemove(this.props.item)}>Remove</button>
                <button className={this.deleteButtonState()} onClick={() => this.props.onDelete(this.props.item.id)}>{this.deleteButtonText()}</button>
                {/* <ul>{this.state.myList.map(charm => <li key={charm}>{charm}</li>)}</ul> */}
            </div>
        );
    }
}

export default Item;