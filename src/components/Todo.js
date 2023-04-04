import { useState } from 'react';
import TodoItems from './TodoLogic';

const Todo = () => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="to-do">
      <h1>Todo list</h1>
      <form action="">
        <Input type="text" name="todo" value={title} handleChange={handleChange} />
        <Button type="submit" key="Add" name="Add" />
      </form>
      <TodoItems />
    </div>
  );
};
/* eslint-disable react/prop-types */
const Input = ({ type, name, handleChange }) => (
  <input type={type} name={name} onChange={handleChange} />
);
/* eslint-disable react/prop-types */
const Button = ({ name }) => (
  <button type="button" key={name}>{name}</button>
);

export default Todo;
