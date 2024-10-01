/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { todoContext } from "./todoContext";

export const TodoContextProvider = ({ children }) => {
  const getData = () => {
    return JSON.parse(localStorage.getItem("data"));
  };

  const [todos, setTodos] = useState(getData()) || [];
  const [inputText, setInputText] = useState("");
  const [update, setUpdate] = useState(false);
  const [shareState, setShareState] = useState({});

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (payload) => {
    setTodos((preTodo) => [...preTodo, payload]);
  };

  const removeTodo = (todoId) => {
    setTodos((preTodo) => preTodo.filter((todo) => todo.id !== todoId));
  };

  const updateTodo = (payload) => {
    setTodos((preTodo) =>
      preTodo.map((todo) =>
        todo.id === payload.id ? { ...todo, text: payload.text } : todo
      )
    );
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  return (
    <todoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        updateTodo,
        deleteAllTodos,
        inputText,
        setInputText,
        update,
        setUpdate,
        shareState,
        setShareState,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};
