import React from 'react';

export default class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    
    this.props.updateInput(event.target.value)
  }

  render() {
    return (
      <form>
        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
      </form>
    )
  }
}
