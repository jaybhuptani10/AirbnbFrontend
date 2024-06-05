// App.jsx
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Account from "./components/Account/Account";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />

        <Route path="/Account/:subpage?" element={<Account />} />
        <Route path="/Account/:subpage/:action" element={<Account />} />
      </Routes>
    </UserContextProvider>
  );
};

export default App;
