import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

export const Todo = () => {
  return (
    <li className="w-full flex justify-between items-center">
      <span className="text-[1.3rem]">Do Homework</span>
      <div className="space-x-3 font-semibold text-white text-2xl">
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-1.5 rounded-md">
          <MdEdit />
        </button>
        <button className="bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded-md">
          <AiFillDelete />
        </button>
      </div>
    </li>
  );
};
