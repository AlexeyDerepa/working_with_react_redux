import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from './redux';

const initialState = { count: 0 };
//////////// REDUCER ///////////////////////
function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT': return { count: state.count + action.amount };
        case 'DECREMENT': return { count: state.count - action.amount };
        case 'RESET': return { count: 0 };
    }
}

/////////// ACTIONS ////////////////////////
function increment(amount) {
    return { type: 'INCREMENT', amount };
}

function decrement(amount) {
    return { type: 'DECREMENT', amount };
}

function reset() {
    return { type: 'RESET' };
}
////////////////////////////////////////////
const store = createStore(reducer, initialState);

class Counter extends React.Component {
    constructor(updateState, state) {

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }
    increment() {
        let amount = parseInt(this.refs.amount.value || 1);
        store.dispatch(increment(amount));
    }
    decrement() {
        let amount = parseInt(this.refs.amount.value || 1);
        store.dispatch(decrement(amount));
    }
    reset() {
        store.dispatch(reset());
    }

    subscribe(callback) {
        this._callbacks.push(callback);
        return () => this._callbacks = this._callbacks.filter(cb => cb !== callback);
    }

    render() {
        const count = store.getState().count;
        return (
            <div>
                <span> {count}</span>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.reset}>R</button>
                    <button onClick={this.increment}>+</button>
                    <input type="text" ref="amount" defaultValue="1" />
                </div>
            </div>
        );
    }
}
