import React from 'react';
import Form from './form'

class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = () => {
    return;
  }

  updateInput = (value) => {
      this.setState({ value })
  }

  render() {
    return (
      <div><input type="text" value={this.state.value} onChange={this.handleChange} />
      <Form updateInput={this.updateInput}/></div>
    );
  }
}

export default ControlledInput;
