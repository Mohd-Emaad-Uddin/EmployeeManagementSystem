import { useState } from "react";
import AllTask from "./AllTask";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      taskCategory,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
    const data = JSON.parse(localStorage.getItem("employee"));

    data.forEach((ele) => {
      if (assignTo === ele.name) {
        ele.tasks.push(newTask);
      }
    });
    localStorage.setItem("employee", JSON.stringify(data));

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setTaskCategory("");
    setAssignTo("");
  };

  return (
    <div className="min-h-screen w-full p-4 md:p-6">
      <div className="mx-auto mt-4">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex w-full flex-wrap items-start justify-between gap-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg shadow-black/40"
        >
          <div className="w-full space-y-3 md:w-1/2 md:pr-5">
            <div>
              <h3 className="mb-1 text-sm font-medium opacity-80">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
                type="text"
                placeholder="Make a user design"
              />
            </div>

            <div>
              <h3 className="mb-1 text-sm font-medium opacity-80">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm outline-none transition scheme-dark focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
                type="date"
              />
            </div>

            <div>
              <h3 className="mb-1 text-sm font-medium opacity-80">Assign To</h3>
              <input
                value={assignTo}
                onChange={(e) => {
                  setAssignTo(e.target.value);
                }}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
                type="text"
                placeholder="Employee Name"
              />
            </div>

            <div>
              <h3 className="mb-1 text-sm font-medium opacity-80">Category</h3>
              <input
                value={taskCategory}
                onChange={(e) => {
                  setTaskCategory(e.target.value);
                }}
                className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30"
                type="text"
                placeholder="Design, DEV, etc"
              />
            </div>
          </div>

          <div className="flex w-full flex-col md:w-1/2 md:self-stretch md:pl-5">
            <h3 className="mb-1 text-sm font-medium opacity-80">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              className="h-32 w-full flex-1 resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 md:h-auto"
              placeholder="Describe what needs to be done"
              name=""
              id=""
              cols="30"
              row="10"
            ></textarea>
          </div>

          <button className="w-full rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-zinc-900">
            Create Task
          </button>
        </form>
      </div>

      <AllTask />
    </div>
  );
};

export default CreateTask;