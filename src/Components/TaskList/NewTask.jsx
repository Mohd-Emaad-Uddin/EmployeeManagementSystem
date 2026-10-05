const NewTask = ({data}) => {
  return (
    <div className="shrink-0 h-full w-75 bg-teal-600 p-5 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.taskCategory}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>
      <div className="mt-4">
        <button className="w-full bg-black rounded active:scale-95 py-1 px-2">Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
