import React from 'react';
import { ListItemText, IconButton, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';


export const EditableListItemText = ({ text, onSave, onCancel}:{ text: string, onSave: (newText:String) => void, onCancel:() => void}) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [editedText, setEditedText] = React.useState(text);
  
  
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEditedText(event.target.value);
    };
  
    const handleSave = () => {
      onSave(editedText);
      setIsEditing(false);
    };
  
  
    return(
      <>
        {isEditing ? (
          <>
          <TextField
            value={editedText}
            onChange={handleTextChange}
            onBlur={handleSave}
            autoFocus
            style={{ width: 'auto', marginRight: '100px'}}
          />
  
          <IconButton onClick={handleSave}>
              <CheckIcon></CheckIcon>Save
          </IconButton>
          </>
        ) : (
          <ListItemText
            primary={editedText}
            onClick={() => setIsEditing(true)}
          />
        )}
      </>
    );
  }