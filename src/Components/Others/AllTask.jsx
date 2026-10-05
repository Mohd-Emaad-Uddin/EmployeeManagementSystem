import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
    const authData = useContext(AuthContext);

    return (
        <div id="tasklist" className="bg-[#1C1C1C] border border-zinc-800 p-5 mt-5 rounded h-90">
            <div className="bg-zinc-800 border border-zinc-700 mb-2 px-4 py-2 flex justify-between rounded">
                <h2 className="text-lg w-1/5 font-semibold">Employee Name</h2>
                <h3 className="text-lg w-1/5 font-semibold text-sky-400!">New Task</h3>
                <h5 className="text-lg w-1/5 font-semibold text-amber-400!">Active Task</h5>
                <h5 className="text-lg w-1/5 font-semibold text-emerald-400!">Completed</h5>
                <h5 className="text-lg w-1/5 font-semibold text-rose-400!">Failed</h5>
            </div>
            <div className="overflow-auto">
                {authData.employee.map((ele, idx) => {
                    return <div key={idx} className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition mb-2 px-4 py-2 flex justify-between rounded">
                        <h2 className="text-lg font-medium w-1/5 ">{ele.name}</h2>
                        <h3 className="text-lg font-medium w-1/5 text-sky-400!">{ele.taskCounts.newTask}</h3>
                        <h5 className="text-lg font-medium w-1/5 text-amber-400!">{ele.taskCounts.active}</h5>
                        <h5 className="text-lg font-medium w-1/5 text-emerald-400!">{ele.taskCounts.completed}</h5>
                        <h5 className="text-lg font-medium w-1/5 text-rose-400!">{ele.taskCounts.failed}</h5>
                    </div>
                })}
            </div>

        </div>
    );
}

export default AllTask;