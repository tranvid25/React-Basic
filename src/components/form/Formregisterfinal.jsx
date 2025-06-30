import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//validation Schema
const schema = yup.object({
  firstName: yup
    .string()
    .required("Please enter your firstName")
    .max(10, " Only enter 10 character or less"),
  lastName: yup
    .string()
    .required("Please enter yout lastName")
    .max(10, "Only enter 10 character or less"),
  email: yup
    .string()
    .required("Please enter your email")
    .email("email is invalid"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .required("Please Confirm password")
    .oneOf([yup.ref("password")], "Password must match"),
  radio: yup.string().required(),
  otherCountry: yup.string().when("country", {
    is: "other",
    then: (schema) => schema.required("Please enter your country"),
  }),
});
const Formregisterfinal = () => {
  const {
    register,
    handleSubmit,
    control,
    setFocus,
    watch,
    reset,
    formState: { errors, isSubmitting, isValid, defaultValues },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
  const onSubmit = (values) => {
    if (isValid) {
      console.log(values);
    }
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      radio: "",
      other: false,
    });
  };
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="p-10 w-full max-w-[500px] mx-auto border border-blue-300 "
    >
      <h2 className="text-center pb-5 font-semibold text-blue-500 text-2xl ">
        Register
      </h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          id="firstName"
          placeholder="Please enter your firstName"
          name="firstName"
          className="p-4 rounded-lg border border-gray-300"
        />
        {errors?.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
        <label htmlFor="firstName">LastName</label>
        <input
          type="text"
          id="lastName"
          placeholder="Please enter your lastName"
          name="lastName"
          className="p-4 rounded-lg border border-gray-300"
        />
        {errors?.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}
        <label htmlFor="firstName">email</label>
        <input
          type="text"
          id="email"
          placeholder="Please enter your email"
          name="email"
          className="p-4 rounded-lg border border-gray-300"
        />
        {errors?.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <label htmlFor="firstName">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Please enter your password"
          name="password"
          className="p-4 rounded-lg border border-gray-300"
        />
        {errors?.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <label htmlFor="firstName">Confirm Password</label>
        <input
          type="password"
          id="Confirm_password"
          placeholder="Please enter your Confirm_password"
          name="Confirm_password"
          className="p-4 rounded-lg border border-gray-300"
        />
        <div>
          <p className="mb-2 font-medium">Gender:</p>
          <label className="mr-4">
            <input type="radio" value="male" {...register("gender")} />
            <span className="ml-1">Male</span>
          </label>
          <label className="mr-4">
            <input type="radio" value="female" {...register("gender")} />
            <span className="ml-1">Female</span>
          </label>
          <label>
            <input type="radio" value="other" {...register("gender")} />
            <span className="ml-1">Other</span>
          </label>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="country" className="block mb-2 font-medium">
            Country:
          </label>
          <select
            id="country"
            {...register("country")}
            className="p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="">-- Select a country --</option>
            <option value="vn">Vietnam</option>
            <option value="us">USA</option>
            <option value="jp">Japan</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg mt-4 flex justify-center items-center"
      >
        {isSubmitting ? (
          <div className="mx-auto w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};
const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-md border border-gray-300"
      {...field}
      {...props}
    />
  );
};

export default Formregisterfinal;
