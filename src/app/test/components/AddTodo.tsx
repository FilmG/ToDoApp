import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (!newTodo) return;
    onAdd({
      id: Date.now(), // You can use a more reliable way to generate unique IDs
      title: newTodo
    });
    setNewTodo('');
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default AddTodo;
