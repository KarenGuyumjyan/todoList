import './App.css';
import { useState } from 'react';
import TodoList from './Todos/TodoList';
import TodoForm from './Todos/TodoForm';
import TodoFooter from './Todos/TodoFooter';

function App() {
  const [todos, setTodods] = useState([
    {
      id: Math.random(),
      text: "Learn HTML",
      isCompleted: true
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false
    }
  ]);

  return (
    <div className="App">
      <header>
        <h1 className="todoAppTitle">todo list</h1>
      </header>
      <TodoForm onAdd={(text) => {
        setTodods([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          }

        ])
      }} />
      <TodoList todos={todos}
        onChange={(newTodo) => {
          setTodods(todos.map(todo => todo.id === newTodo.id ? newTodo : todo))
        }}

        onDelete={(todo) => {
          setTodods(todos.filter(t => t.id !== todo.id))
        }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        setTodods(todos.filter(todo => !todo.isCompleted));
      }} />
    </div>
  );
}

export default App;
