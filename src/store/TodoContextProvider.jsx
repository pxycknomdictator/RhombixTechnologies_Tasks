/* eslint-disable react/prop-types */
import { useState } from "react";
import { todoContext } from "./todoContext";

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [update, setUpdate] = useState(false);
  const [shareState, setShareState] = useState({});

  const addTodo = (payload) => {
    setTodos((preTodo) => [...preTodo, payload]);
  };

  const removeTodo = (todoId) => {
    const remove = todos.filter((todo) => todo.id !== todoId);
    setTodos(remove);
  };

  const updateTodo = (payload) => {
    setTodos((preTodo) => {
      const findTodoIndex = preTodo.findIndex((todo) => todo.id === payload.id);

      if (findTodoIndex !== -1) {
        const updatedTodo = {
          ...preTodo[findTodoIndex],
          text: payload.text,
        };
        return [
          ...preTodo.slice(0, findTodoIndex),
          updatedTodo,
          ...preTodo.slice(findTodoIndex + 1),
        ];
      }
      return preTodo;
    });
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
