import React, { useState, useEffect } from 'react';
import TodoList, { Todo } from './TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

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

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
