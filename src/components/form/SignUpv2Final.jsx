import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import PreviousMap_ from "postcss/lib/previous-map";

const SignUpv2Final = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        email: "",
        password: "",
        intro: "",
        job: "",
        terms: false,
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
        intro: Yup.string()
          .required("Intro is required")
          .max(200, "Intro must be 200 characters or less"),
        job: Yup.string().required("Please select a job"),
        terms: Yup.boolean().oneOf(
          [true],
          "You must accept the terms and conditions"
        ),
      })}
      onSubmit={(values) => {
        console.log("Submitted values:", values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="off">
        {/* <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="firstName">Firstname</label>
          <Field
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your First name"
            className="p-4 rounded-md border border-gray-300"
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="text-red-500 text-sm"
          />
        </div> */}
        <MyInput
          label="First name"
          name="firstName"
          type="text"
          placeholder="Enter your first name"
        />
        <MyInput
          label="Email"
          name="email"
          type="text"
          placeholder="Enter your email"
        />
        <MyInput
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="Select">Select</label>
          <Field
            as="select"
            id="job"
            name="job"
            className="p-4 rounded-md border border-gray-300"
          >
            <option value="">Select a job</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="student">Student</option>
            <option value="other">Other</option>
          </Field>
          <ErrorMessage
            name="job"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <Field type="checkbox" id="terms" name="terms" />
          <label htmlFor="terms" className="text-sm">
            I accept the terms and conditions
          </label>
          <ErrorMessage
            name="terms"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-600 text-while font-semibold rounded-lg"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...field}
        {...props}
        className="p-4 rounded-md border border-gray-300"
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpv2Final;
