import { Todo } from "./Todo";

export const TodoList = () => {
  return (
    <ul className="mt-5 grid grid-cols-1 gap-y-5">
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </ul>
  );
};
