import React, { useState } from 'react';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const [checked, setChecked] = useState(false);
	
  const handleCheckboxChange = (todo: Todo) => {
  	todo.completed = !todo.completed;
  	setChecked((lastValue) => !lastValue);
  }

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}{        
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => handleCheckboxChange(todo)}
		  	/>}
		  </li>
      ))}
    </ul>
  );
};

export default TodoList;
