import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <main className="w-full">
      <Input />
      <TodoList />
    </main>
  );
};
