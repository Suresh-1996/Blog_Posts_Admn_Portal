import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user_name = localStorage.getItem("user_name");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="flex  bg-slate-200 p-5 justify-between ">
      <div className="flex text-gray-600  gap-3 items-center justify-center">
        <h1 className=" text-[10px] font-medium md:text-base">
          Welcome ! {user_name}{" "}
        </h1>
        <h1 className="text-[10px] font-bold  md:text-base">
          Post Your Blog post
        </h1>
      </div>

      <div className="flex  mx-5 gap-2">
        <button
          className="bg-red-600  rounded-lg p-1 md:px-3 md:text-sm text-[10px]"
          onClick={handleLogout}
        >
          Logout
        </button>
        <button
          className="bg-green-500 rounded-lg p-1 md:px-3 md:text-sm text-[10px]"
          onClick={() => {
            navigate("/createAdmin");
          }}
        >
          CreateUser
        </button>
      </div>
    </div>
  );
};

export default Home;
