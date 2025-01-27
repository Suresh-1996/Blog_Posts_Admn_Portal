import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:5000/admin/login", {
        email,
        password,
      });
      alert("Login successful");
      navigate("/home");
      localStorage.setItem("admin_token", data.token);
      localStorage.setItem("user_name", data.user.name);
      const admit = localStorage.getItem("admin_token");
      console.log(admit);
    } catch (error) {
      // console.error(error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className=" flex  min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[600px]   gap-2 p-2  bg-slate-100 shadow-lg rounded-lg"
      >
        <div className="flex w-full items-center justify-center">
          <h1 className="p-3 font-serif text-gray-800">Admin Login</h1>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className=" mx-5 bg-transparent p-2 border-0 border-b-2 text-sm focus:outline-none focus:border-blue-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mx-5 bg-transparent p-2 border-0 border-b-2 text-sm focus:outline-none focus:border-blue-300"
        />
        <button
          type="submit"
          className=" mx-5 p-2 hover:bg-green-500 text-sm shadow-sm border bg-green-400"
        >
          Login
        </button>
        <p className="mx-5 p-2 text-sm text-gray-900">Forgot possword ?</p>
      </form>
    </div>
  );
};

export default AdminLogin;
