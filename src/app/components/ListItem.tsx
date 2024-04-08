import React from "react";
import { ListItem, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditableListItemText } from "./UpdateTask";

export const TodoList = ({ todos, handleUpdateTodo, handleDeleteTodo}) => {
    return (
        <>
    {todos.map((todo) => (
        <ListItem style={{display: 'flex', justifyContent: 'space-between'}} key={todo.id}>
          <EditableListItemText
            text={todo.title}
            onSave={(newText) => handleUpdateTodo(todo.id, newText)}
            onCancel={() => {}}
          />
          <IconButton onClick={() => handleDeleteTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
      </>
    );
}