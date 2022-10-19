import { useState } from 'react';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';

const Todo = () => {
  const [getTodos, setTodos] = useState([
    { id: 1, title: 'Code' },
    { id: 2, title: 'Sleep' },
  ]);

  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo));
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList dataTodos={getTodos} />
    </div>
  );
};

export default Todo;
