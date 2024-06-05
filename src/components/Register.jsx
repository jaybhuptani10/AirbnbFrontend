import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerUser = async (ev) => {
    try {
      axios
        .post("/api/users/register", {
          name,
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      alert("User created successfully");
      navigate("/Login");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-2  ">
      <h1 className="text-6xl text-center mb-4">REGISTER</h1>
      <form action="" className="max-w-xl mx-auto" onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
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
        <button className="primary">Register</button>
        <div className="text-center py-2 text-gray-500">
          Already a member?{" "}
          <Link className="underline text-black" to={"/Login"}>
            Login Now
          </Link>{" "}
        </div>
      </form>
    </div>
  );
};

export default Register;
