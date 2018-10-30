// Code ControlledInput Component Here
import React, { Component } from "react";

export default class ControlledInput extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  };

  handleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => console.log("===>", event.target.name, event.target.value)
    );
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            id="firstName"
            onChange={event => this.handleChange(event)}
            name="firstName"
            value={this.state.firstName}
          />
          <input
            type="text"
            id="lastName"
            onChange={event => this.handleChange(event)}
            name="lastName"
            value={this.state.lastName}
          />
        </form>
      </div>
    );
  }
}
