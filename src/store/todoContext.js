import { createContext } from "react";

export const todoContext = createContext({
  todos: [],
  addTodo() {},
  removeTodo() {},
  updateTodo() {},
  deleteAllTodos() {},
  inputText: String,
  setInputText() {},
  update: Boolean,
  setUpdate() {},
  shareState: {},
  setShareState() {},
});
