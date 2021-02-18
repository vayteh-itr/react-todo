import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { ITodo } from "../interfaces";


const useStyles = makeStyles({
  root: {
    paddingTop: "100px",
  },
});

const Todo: React.FC = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos')!) as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodos = (title: string) => {
    if (title) {
      const newItem: ITodo = {
        title: title,
        id: Date.now(),
        time: new Date().toLocaleString(),
        done: false,
      };
      setTodos((prev) => [newItem, ...prev]);
    }
  };

  const toggleDone = (id: number) => {
    setTodos((prev) =>
      prev.map((el) => {
        if (el.id === id) el.done = !el.done;
        return el;
      })
    );
  };

  const remove = (id: number) => {
    setTodos((prev) => prev.filter((el) => el.id !== id));
  };

  const handleTodoUpdate = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const newItem: ITodo[] = [...todos]
    newItem.find((todo: ITodo, index:number) => {
    if (todo.id === id) {
      todo.title = event.target.value
      todo.time = new Date().toLocaleString() + ' (edited)'
      const el = newItem.splice(index, 1)
      newItem.unshift(el[0])
    }
    setTodos(newItem)
    });
  }

  return (
      <Container maxWidth="md" className={classes.root}>
        <TodoForm onAdd={addTodos} />
        <TodoList todos={todos} toggleDone={toggleDone} remove={remove} handleTodoUpdate={handleTodoUpdate} />
      </Container>
  );
};

export default Todo;
