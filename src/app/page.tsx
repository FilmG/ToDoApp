'use client';

import React, { useState } from 'react';
import { Card, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddTask } from './components/AddTask';
import { TodoList } from './components/ListItem';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddToDo = (newTodo: string) => {
    const newTodos = {id: todos.length + 1, title: newTodo};
    setTodos([...todos, newTodos]);
  }

  const handleDeleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const handleUpdateTodo = (id: number, newText: string) => {
    setTodos((current) =>
      current.map((todos) =>
        todos.id === id ? { ...todos, title: newText } : todos
      )
    );
  }

  console.log(todos);


  return (
    <Card
      variant="outlined"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto'
      }}
    >
      <AddTask Add={handleAddToDo} />

      <TodoList todos={todos} handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo} />
    </Card>
  );
}

export default App;
