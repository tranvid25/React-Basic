import React from "react";
import ReactDOM from "react-dom";
const Modal = ({ open = false, handleClose}) => {
  if (typeof document == "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center  p-5  modal ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-25 overlay"onClick={handleClose}></div>
      <div className="modal-content w-full bg-white relative z-10 p-10 rounded-lg max-w-[482px]">
        <span className="absolute top-0 right-0 cursor-pointer" onClick={handleClose}>Close</span>
        <h2 className="mb-5 text-4xl font-semibold text-center text-black">
          Welcome Back!
        </h2>
        <div className="flex flex-col gap-5 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email
          </label>
          <input
            type="text"
            className="w-full p-3 bg-blue-200 border border-blue-400 rounded-lg"
            placeholder="Enter your Email"
          />
        </div>
        <div className="flex flex-col gap-5 mb-5">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password"
            className="w-full p-3 bg-blue-200 border border-blue-400 rounded-lg"
            placeholder="Enter your Password"
          />
        </div>
        <button className="w-full p-4 text-base font-semibold text-white bg-blue-600 rounded-xl">
          Đăng nhập
        </button>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
