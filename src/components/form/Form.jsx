import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
  });
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]:e.target.value
    })
  };

  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
          placeholder="Enter your name..."
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="email"
          className="w-full max-w-[300px] p-3 border border-gray-100 rounded-lg"
          placeholder="Enter your email..."
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Form;
