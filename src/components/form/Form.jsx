import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
  const { values, handleInputChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");
  const handlesubmitform = (e) => {
    e.preventDefault(); //khỏi reload lại trang
    if (values.fullname === "") {
      setNameError("Your fullname is Empty");
    } else {
      setNameError("");
    }
  };
  return (
    <div className="p-5">
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={handlesubmitform}
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
            placeholder="Enter your name..."
            onChange={handleInputChange}
          />
          {nameError}
        </div>

        <input
          type="text"
          name="email"
          className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
          placeholder="Enter your email..."
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="p-3 rounded-lg text-white bg-blue-500 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
