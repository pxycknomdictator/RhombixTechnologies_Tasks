import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <main className="w-screen min-h-screen flex items-center justify-center bg-[#f2f4f7]">
      <section className="w-[60%] bg-white p-6 rounded-lg custom_shadow">
        <Input />
        <TodoList />
      </section>
    </main>
  );
};
