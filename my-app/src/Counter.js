import React, { Component } from 'react';

export default class Counter extends Component {
constructor(props) {
  super(props)

  this.state = {
     count: 0
  }

  this.increment = this.increment.bind(this);
  this.descrement = this.descrement.bind(this);
  this.reset = this.reset.bind(this);
}


increment() {
    this.setState(state => ({
        count: state.count + 1
    }))
};

descrement() {
    this.setState(state => ({
        count: state.count - 1
    }))
};

reset() {
    this.setState({
        count: 0
    })
};


  render() {
    return <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.descrement}>Descrement</button>
        <button onClick={this.reset}>reset</button>
        <h1>Current: {this.state.count}</h1>
    </div>;
  }
}
