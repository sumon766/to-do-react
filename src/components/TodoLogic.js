import { useState } from 'react';

const TodoItems = () => {
  const [todoItems, setTodosItems] = useState([
    {
      id: 1,
      text: 'Javscript DOM manipulation',
      completed: false,
    },
    {
      id: 2,
      text: 'React development learning',
      completed: false,
    },
    {
      id: 3,
      text: 'Web development environment setup',
      completed: false,
    },
  ]);

  const handleChange = (id) => {
    setTodosItems((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const deleteTodo = (id) => {
    setTodosItems([
      ...todoItems.filter((todo) => todo.id !== id),
    ]);
  };

  const todoList = () => todoItems.map((todoItem) => (
    <li key={todoItem.id}>
      <input type="checkbox" checked={todoItem.completed} onChange={() => handleChange(todoItem.id)} />
      {todoItem.text}
      <button type="button" onClick={() => deleteTodo(todoItem.id)}>Del</button>
    </li>
  ));

  return (
    <ul>
      { todoList() }
    </ul>
  );
};

export default TodoItems;
