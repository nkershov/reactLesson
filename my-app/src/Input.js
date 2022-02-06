import React, { Component } from 'react';

export default class Input extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         input: "",
         submit: ""
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            submit: this.state.input
        })
    }
    
  render() {
    return <div>
        <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.handleChange}></input>
        <button type="submit">Submit!</button>
        </form>
        {/* <h5>Controlled input:</h5> */}
        <h3>{this.state.submit}</h3>
    </div>;
  }
}

