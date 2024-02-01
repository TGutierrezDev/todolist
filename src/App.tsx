import React, { useState } from 'react';
import TodoList from './TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a React app', completed: false },
  ]);

  const [newTodoText, setNewTodoText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: prevTodos.length + 1, text: newTodoText, completed: false },
      ]);

      setNewTodoText('');
    }
  };

  return (
    <div>
      <h1>Tomi todo list</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a new todo..."
          value={newTodoText}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <TodoList todos={todos} />
    </div>
  );
};

export default App;
