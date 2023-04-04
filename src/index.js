import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheet/app.css';
import Header from './components/Header';
import Todo from './components/Todo';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <div className="todo-container">
    <Header />
    <Todo />
  </div>,
);
