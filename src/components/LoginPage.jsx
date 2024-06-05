import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleLoginSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const userInfo = await axios.post("/api/users/login", {
        email,
        password,
      });
      setUser(userInfo.data);
      alert("Login Successful");
      navigate("/");
    } catch (e) {
      alert("Login failed");
      console.error(e);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-2  ">
      <h1 className="text-6xl text-center mb-4">LOGIN</h1>
      <form action="" className="max-w-xl mx-auto" onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button className="primary">Login</button>
        <div className="text-center py-2 text-gray-500">
          Don't have an account?{" "}
          <Link className="underline text-black" to={"/register"}>
            Register Now
          </Link>{" "}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
