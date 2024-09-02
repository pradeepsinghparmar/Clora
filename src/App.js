
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import Dashboard from "./components/Dashboard/Dashboard";
import Overview from "./components/FHIR-Architecture/Overview";
import UserMaster from "./components/UserMaster/UserMaster";
import CreateUser from "./components/UserMaster/CreateUser";
import EditUser from "./components/UserMaster/EditUser";
import RoleList from "./components/Role/RoleList";
import CreateRole from "./components/Role/CreateRole";
import EditRole from "./components/Role/EditRole";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
        {isLoggedIn ? (
          <Route
            path="/dashboard"
            element={<Dashboard onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/overview"
            element={<Overview onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/user-master"
            element={<UserMaster onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-user"
            element={<CreateUser onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/edit-user"
            element={<EditUser onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/role-list"
            element={<RoleList onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-role"
            element={<CreateRole onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/edit-role"
            element={<EditRole onLogout={handleLogout} />}
          />
        ) : null}
      </Routes>
    </Router>
  );
}

export default App;
