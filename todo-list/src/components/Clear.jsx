import { useContext } from "react";
import { todoContext } from "../store/todoContext";

export const Clear = () => {
  const { todos, deleteAllTodos } = useContext(todoContext);
  return (
    <section className="w-full px-4 c_small:px-0 items-center justify-center mt-[4rem] absolute responsive_btn c_small:bottom-[-29px] c_small:relative">
      <span className="text-xl font-semibold inline-block mb-4 text-gray-500">
        Total Todos: {todos.length}
      </span>
      <button
        onClick={deleteAllTodos}
        className="inline-block w-full py-2 text-xl text-white bg-indigo-500 font-semibold rounded-md hover:bg-indigo-600"
      >
        Clear all
      </button>
      <span className="text-center block mt-3 -mb-3">
        Designed and developed by
        <a
          href="https://www.linkedin.com/in/noman-dev/"
          target="_blank"
          className="font-semibold text-blue-500"
        >
          {""} Noman
        </a>
      </span>
    </section>
  );
};
