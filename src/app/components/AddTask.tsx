import React, { useState } from 'react';
import { Box, TextField, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const AddTask = ({ Add }) => {
  const [newTodo, setNewTodo] = useState('');


  return (
    <Box style={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        label="New Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        variant="outlined"
        margin="normal"
        style={{ width: '80%' }}
      />
      <Fab color="primary" onClick={(e) => {e.preventDefault();
                                            Add(newTodo);
                                            setNewTodo('');
      }} style={{ marginLeft: '10px' }}>
        <AddIcon />
      </Fab>
    </Box>
  );
};
