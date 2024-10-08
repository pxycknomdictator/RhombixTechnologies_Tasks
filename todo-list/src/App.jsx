import { useContext } from "react";
import { Clear } from "./components/Clear";
import { Input } from "./components/Input";
import { Update } from "./components/Update";
import { TodoList } from "./components/TodoList";
import { todoContext } from "./store/todoContext";

export const App = () => {
  const { update } = useContext(todoContext);
  return (
    <main className="w-screen min-h-screen flex items-center justify-center bg-[#f2f4f7]">
      <section className="w-full h-screen c_small:h-auto py-9 c_small:p-7 mx-auto c_small:w-[90%] sm:w-10/12 c_medium:w-[70%] lg:max-w-[750px] bg-white p-4 sm:pt-9 c_small:pb-3 rounded-lg custom_shadow relative">
        {!update ? <Input /> : <Update />}
        <TodoList />
        <Clear />
      </section>
    </main>
  );
};
