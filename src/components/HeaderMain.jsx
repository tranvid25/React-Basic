import React from "react";
import { useAuth } from "../contexts/auth-context";
const HeaderMain = () => {
  const {user}=useAuth();
  return (
    <div className="flex items-center justify-around p-4 bg-white shadow-md">
      <div className="flex items-center gap-x-3">
        <img
          src="https://images.unsplash.com/photo-1748392029321-58793571f850?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          alt=""
          className="object-cover w-10 h-10 rounded-full"
        />
        <span className="text-sm font-medium">welcomback 
          <strong>{user.fullname}</strong>
        </span>
      </div>
      <span className="text-sm font-medium">{user.email}</span>
    </div>
  );
};

export default HeaderMain;
