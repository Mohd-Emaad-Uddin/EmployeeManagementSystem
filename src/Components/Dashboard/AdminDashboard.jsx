import CreateTask from "../Others/CreateTask";
import Header from "../Others/Header";

const AdminDashboard = (props) => {

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  }

  return (
    <div className="flex h-screen w-full flex-col p-6">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium">
          Hello, <br />
          <span className="text-3xl font-semibold">Admin👋</span>
        </h1>
        <button
          onClick={logOutUser}
          className="bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-sm"
        >
          Log Out
        </button>
      </div>
      {/* <Header changeUser={props.changeUser} /> */}
      <CreateTask />
    </div>
  );
};

export default AdminDashboard;