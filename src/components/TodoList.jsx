import { useContext } from "react";
import { Todo } from "./Todo";
import { todoContext } from "../store/todoContext";

export const TodoList = () => {
  const { todos } = useContext(todoContext);

  return (
    <ul className="mt-8 grid grid-cols-1 gap-y-5">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
