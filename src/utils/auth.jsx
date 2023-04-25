import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  useEffect(() => {
    const data = localStorage.getItem("currentUser");
    if (data) {
      const currentUser = JSON.parse(data);
      setUser(currentUser);
    }
  }, []);

  function login(email, password) {
    const data = localStorage.getItem("users");

    if (!data) {
      throw new Error("User does not exist");
    }

    const users = JSON.parse(localStorage.getItem("users"));

    if (!(email in users)) {
      throw new Error("User does not exist");
    }

    if (users[email].password !== password) {
      throw new Error("Invalid Login Credentials");
    }

    localStorage.setItem("currentUser", JSON.stringify(users[email]));

    setUser(users[email]);

    return true;
  }

  function createUser(firstName, lastName, gender, email, password) {
    const data = localStorage.getItem("users");

    if (!data) localStorage.setItem("users", JSON.stringify({}));

    const users = JSON.parse(localStorage.getItem("users"));

    if (email in users) {
      throw new Error("User Already Exists.");
    }

    users[email] = {
      firstName,
      lastName,
      gender,
      email,
      password,
    };

    localStorage.setItem("users", JSON.stringify(users));
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};
