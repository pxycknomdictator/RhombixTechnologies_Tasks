export const Todo = () => {
  return (
    <li className="w-full flex justify-between items-center">
      <span className="text-2xl">Do Homework</span>
      <div className="space-x-2 font-semibold text-white">
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-1.5">
          Edit
        </button>
        <button className="bg-red-500 hover:bg-red-600 px-4 py-1.5">
          Delete
        </button>
      </div>
    </li>
  );
};
