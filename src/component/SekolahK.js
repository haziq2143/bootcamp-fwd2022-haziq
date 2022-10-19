import React from 'react';
import List from './List';

class SekolahK extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: '',
      items: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todoItem !== '') {
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: '',
    });
    }
  };

  handleChange = (e) => {
    this.setState({
      todoItem: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.todoItem} onChange={this.handleChange} />
          <button>Add</button>
        </form>

        <List item={this.state.items} />
      </div>
    );
  }
}
export default SekolahK;
