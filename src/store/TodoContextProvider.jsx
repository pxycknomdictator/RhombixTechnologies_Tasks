/* eslint-disable react/prop-types */
import { todoContext } from "./todoContext";

export const TodoContextProvider = ({ children }) => {
  return <todoContext.Provider>{children}</todoContext.Provider>;
};
