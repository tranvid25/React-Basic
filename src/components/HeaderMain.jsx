import React from "react";
import { useAuth } from "../contexts/auth-context";
import { set } from "react-hook-form";
const HeaderMain = () => {
  const { user, setUser } = useAuth();
  return (
    <div className="flex items-center justify-around p-4 bg-white shadow-md">
      <div className="flex items-center gap-x-3">
        <img
          src={user.avatar}
          className="object-cover w-10 h-10 rounded-full"
        />
        <span className="text-sm font-medium">
          welcomback
          <strong>{user.fullname}</strong>
        </span>
      </div>
      <button className="p-2 bg-gray-400 rounded-lg" onClick={() => setUser(null)}>
        Sign out
      </button>
    </div>
  );
};

export default HeaderMain;
