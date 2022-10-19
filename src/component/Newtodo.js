import React from 'react';

import Input from './Input';
import List from './List';

class Newtodo extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      item: [],
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.input !== '') {
      this.setState({
        item: [...this.state.item, this.state.input],
        Input: '',
      });
    }
  };

  changeHandle = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Input submit={this.submitHandler} val={this.state.input} chg={this.changeHandle} />
        <List items={this.state.item} />
      </div>
    );
  }
}

export default Newtodo;
