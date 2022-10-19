import List from './List';
import React from 'react';

class Mytodo extends React.Component {
  constructor() {
    super();
    this.state = {
      inputUser: '',
      todoItems: [],
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputUser !== '') {
      this.setState({
        todoItems: [...this.state.todoItems, this.state.inputUser],
        inputUser: '',
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      inputUser: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <form action="" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.inputUser} onChange={this.handleChange} />

            <button>Add</button>
          </form>
        </div>
        <div>
          <List items={this.state.todoItems} />
        </div>
      </div>
    );
  }
}
export default Mytodo;
