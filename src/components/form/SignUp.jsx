import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Requied";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 character or less";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (values.email.length > 10) {
//     errors.email = "Must be 10 or less";
//   }
//   return errors;
// };

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },
    validationSchema:Yup.object({
       firstName:Yup.string() .max(20,'Must be 20 character or less')
       .required('Required'),
       email:Yup.string().max(10,'Must be 10 charaters')
       .required('Required')
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">Fistname</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          {...formik.getFieldProps('firstName')}
        />
        { formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : null}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          className="p-4 rounded-md border border-gray-100"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-sm text-red-500">{formik.errors.email}</div>
        ) : null}
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
      <button
        type="submit"
        className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUp;
