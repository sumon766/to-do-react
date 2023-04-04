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
}

const Input = ({ type, name, handleChange }) => {
  return (
      <input type={type} name={name} onChange={handleChange} />
  );
}

const Button = ({ type, name }) => {
  return (
    <button type={type} key={name}>{name}</button>
  );
}

export default Todo;