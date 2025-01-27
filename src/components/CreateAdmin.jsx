import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateAdmin = () => {
  const token = localStorage.getItem("admin_token");
  console.log("admin token", token);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/admin/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Admin created successfully");
      navigate("/home");
    } catch (error) {
      alert("Error creating admin");
    }
  };

  return (
    <div className="flex  min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[600px]   gap-2 p-2  bg-slate-100 shadow-lg rounded-lg"
      >
        <div className="flex w-full items-center justify-center">
          <h1 className="p-3 font-serif text-gray-800">Admin Signup</h1>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mx-5 bg-transparent p-2 border-0 border-b-2 text-sm focus:outline-none focus:border-blue-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mx-5 bg-transparent p-2 border-0 border-b-2 text-sm focus:outline-none focus:border-blue-300"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="mx-5 bg-transparent p-2 border-0 border-b-2 text-sm focus:outline-none focus:border-blue-300"
        />
        <button
          type="submit"
          className="mx-5 p-2 hover:bg-green-500 text-sm shadow-sm border bg-green-400"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default CreateAdmin;
