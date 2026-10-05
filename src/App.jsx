import { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUser(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    console.log("AUTH DATA:", authData);
    console.log("EMPLOYEES:", authData?.employee);
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employee.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else alert("Invalid Credential");
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" && <AdminDashboard changeUser={setUser} />}
      {user == "employee" && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUser} />
      )}
    </>
  );
};

export default App;