import React from "react";

const Form2 = () => {
  

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
        <input type="checkbox" name="hobby" onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default Form2;
