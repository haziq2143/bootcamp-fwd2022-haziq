import List from './List';
import React from 'react';

class Todolists extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      todoItem: [],
    };
    console.log(this.state.todoItem);
  }

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.input !== '') {
      this.setState({
        todoItem: [...this.state.todoItem, this.state.input],
        input: '',
      });
    }
  };

  changeHandler = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.submitHandler}>
          <input type="text" value={this.state.input} onChange={this.changeHandler} />
          <button>Add</button>
        </form>
        <List items={this.state.todoItem} />
      </div>
    );
  }
}
export default Todolists;
