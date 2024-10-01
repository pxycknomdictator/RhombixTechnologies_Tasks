import { Clear } from "./components/Clear";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <main className="w-screen min-h-screen flex items-center justify-center bg-[#f2f4f7]">
      <section className="w-1/2 bg-white p-9 rounded-lg custom_shadow">
        <Input />
        <TodoList />
        <Clear />
      </section>
    </main>
  );
};
