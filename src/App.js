import React from "react";
import Routing from "./Routing";
import { createContext } from "react";
import { useState } from "react";

export const UserDataContext = createContext();
export const AuthContext = createContext();

function App() {
  const [authentication, setAuthentication] = useState(
    localStorage.getItem("authentication"),
  );
  const [userInfo, setUserInfo] = useState(null);
  return (
    <AuthContext.Provider value={{ authentication, setAuthentication }}>
      <UserDataContext.Provider value={{ userInfo, setUserInfo }}>
        <Routing />
      </UserDataContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
