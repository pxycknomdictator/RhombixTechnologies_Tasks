import { createContext } from "react";

export const todoContext = createContext({
  todos: [],
  addTodo() {},
  removeTodo() {},
  updateTodo() {},
  deleteAllTodos() {},
});
