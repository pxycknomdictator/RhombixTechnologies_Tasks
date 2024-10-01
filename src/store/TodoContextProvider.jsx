/* eslint-disable react/prop-types */
import { useState } from "react";
import { todoContext } from "./todoContext";

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (payload) => {
    setTodos((preTodo) => [...preTodo, payload]);
  };

  const removeTodo = (todoId) => {
    const remove = todos.filter((todo) => todo.id !== todoId);
    setTodos(remove);
  };

  const updateTodo = (payload) => {
    const findTodo = todos.findIndex((todo) => todo.id === payload.id);
    if (findTodo !== -1) {
      setTodos((preTodo) => [
        ...preTodo,
        (preTodo[findTodo].text = payload.text),
      ]);
    }
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  return (
    <todoContext.Provider
      value={{ todos, addTodo, removeTodo, updateTodo, deleteAllTodos }}
    >
      {children}
    </todoContext.Provider>
  );
};
