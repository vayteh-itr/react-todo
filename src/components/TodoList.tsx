import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ITodo } from "../interfaces";
import Item from "./Item";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "30px",
  },
});

type TodoListProps = {
  todos: ITodo[];
  toggleDone(id: number): void;
  remove(id: number): void;
  handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: number): void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, toggleDone, remove, handleTodoUpdate }) => {
  const styles = useStyles();
    return (
      <Container className={styles.root}>
        {
        todos.length ? (
          todos.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            id={item.id}
            time={item.time}
            done={item.done}
            onDone={toggleDone}
            onRemove={remove}
            handleTodoUpdate={handleTodoUpdate}
          />
        ))
        ) : (
          <Typography variant="h4">No task...</Typography>
       )
      }
      </Container>
    );
};

export default TodoList;
