import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";

interface ToDoProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<ToDoProps> = (props) => {
  const [title, setTitle] = useState<string>('');

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(title);
      setTitle('');
    }
  }

  return (
    <TextField
      id="add-todo"
      variant="outlined"
      label="Add some job:"
      autoFocus
      value={title}
      fullWidth={true}
      onChange={(event) => setTitle(event.target.value)}
      onKeyPress={(event) => keyPressHandler(event)}
    />
  );
};

export default TodoForm;
