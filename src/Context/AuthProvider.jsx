import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../Utils/LocalStorage.jsx";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employee: [], admin: [] });

  useEffect(() => {
        const { employee, admin } = getLocalStorage();

        setUserData({
            employee: employee || [],
            admin: admin || []
        });
    }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;