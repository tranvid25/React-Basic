import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpv2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(20, "Must be 20 character or less"),
        email: Yup.string()
          .required("Email is required")
          .email("Email is invalid"),
        password: Yup.string()
          .required("password is required")
          .min(5, "Password must have min 5 characters")
          .max(10, "Password have max 10 characters"),
      })}
      onSubmit={(values) => {
        console.log("Submitted values:", values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="firstName">Firstname</label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your First name"
            className="p-4 rounded-md border border-gray-300"
          />
          <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm"/>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email">Email</label>
          <Field
          type="text"
          id="email"
          name="email"
          placeholder="Enter your name email...."
          className="p-4 rounded-md border border-gray-300"
          />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm"/>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="password">Password</label>
          <Field
          type="password"
          id="password"
          name="password"
          placeholder="Enter yout password..."
          className="p-4 rounded-md border border-gray-300"
          />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm"/>
        </div>
        <button type="submit" className="w-full p-4 bg-blue-600 text-while font-semibold rounded-lg">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpv2;
