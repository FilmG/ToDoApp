import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const DeleteTask = ({handleDeleteTodo, todoId}) => { 
    return (
    <IconButton onClick={(e) => {e.preventDefault; handleDeleteTodo(todoId); console.log("Successfully Deleted" + todoId);}}>
        <DeleteIcon />
    </IconButton>
    );
}