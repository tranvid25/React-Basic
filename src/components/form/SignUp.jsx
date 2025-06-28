import React from "react";
import { useFormik } from "formik";
const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">Fistname</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          className="p-4 rounded-md border border-gray-100"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="p-4 rounded-md border border-gray-100"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </div>
      <button className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg">
        Submit
      </button>
    </form>
  );
};

export default SignUp;
