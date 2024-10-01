import { IoMdAdd } from "react-icons/io";

export const Input = () => {
  return (
    <form className="max-w-full">
      <div className="flex gap-3">
        <input
          className="inline-block w-full outline-none border border-black text-xl pl-3"
          placeholder="Enter Todo"
          type="text"
        />
        <div className="text-2xl bg-green-500 hover:bg-green-600 py-1.5 px-4 text-white font-bold cursor-pointer">
          <IoMdAdd />
        </div>
      </div>
    </form>
  );
};
