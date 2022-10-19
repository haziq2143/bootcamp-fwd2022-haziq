import List from './List';
import React from 'react';

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputUser: '',
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.inputUser !== '') {
      this.setState({
        todos: [...this.state.todos, this.state.inputUser],
        inputUser: '',
      });
    }
  };

  changeHandler = (e) => {
    this.setState({
      inputUser: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.submitHandler}>
          <input type="text" value={this.state.inputUser} onChange={this.changeHandler} />
          <button>Add</button>
        </form>

        <List items={this.state.todos} />
      </div>
    );
  }
}
export default Todos;
