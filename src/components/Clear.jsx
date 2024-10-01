import { useContext } from "react";
import { todoContext } from "../store/todoContext";

export const Clear = () => {
  const { todos } = useContext(todoContext);
  return (
    <section className="w-full px-4 c_small:px-0 items-center justify-center mt-12 absolute responsive_btn c_small:bottom-[-29px] c_small:relative">
      <span className="text-xl font-semibold inline-block mb-2 text-gray-500">
        Total Todos: {todos.length}
      </span>
      <button className="inline-block w-full py-2 text-xl text-white bg-indigo-500 font-semibold rounded-md hover:bg-indigo-600">
        Clear all
      </button>
    </section>
  );
};
