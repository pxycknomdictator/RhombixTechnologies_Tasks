/* eslint-disable react/prop-types */
import { useState } from "react";
import { todoContext } from "./todoContext";

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <todoContext.Provider value={{ todos }}>{children}</todoContext.Provider>
  );
};
