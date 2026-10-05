const Accept = ({data}) => {
  // console.log(data.taskTitle);
  

  return (
    <div className="shrink-0 h-full w-75 bg-purple-400 p-5 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.taskCategory}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm rounded active:scale-95">Mark as completed</button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded active:scale-95">Mark as failed</button>
      </div>
    </div>
  );
};

export default Accept;
