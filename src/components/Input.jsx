import { IoMdAdd } from "react-icons/io";
import { Heading } from "./Heading";

export const Input = () => {
  return (
    <form className="max-w-full">
      <Heading />
      <div className="flex gap-2 c_small:gap-3">
        <input
          className="inline-block w-full outline-none border text-[1.3rem] c_small:text-xl pl-3 transition-all rounded-md focus:border-[3px] focus:border-blue-500"
          placeholder="Enter Todo"
          type="text"
        />
        <div className="text-[1.3rem] c_small:text-3xl bg-green-500 hover:bg-green-600 py-2 px-4 text-white font-bold cursor-pointer rounded-md">
          <IoMdAdd />
        </div>
      </div>
    </form>
  );
};
