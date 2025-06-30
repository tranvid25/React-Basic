import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

// ✅ Validation Schema
const schema = yup.object({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .max(10, "Must be 10 characters or less"),
  email: yup
    .string()
    .required("Please enter your email")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(6, "Password must be at least 6 characters"),
});

const SignUpHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange", // optional: trigger validation on change
  });
  const watchShowAge = watch("showAge", false);
  const onSubmit = async (values) => {
    if (isValid) {
      console.log("send data to backend");
    }
    const response = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=react"
    );
    return response.data;
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2">
        {/* First Name */}
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-300"
          defaultValue="Vĩ"
          {...register("firstName")}
        />
        {errors?.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="p-4 rounded-md border border-gray-300"
          {...register("email")}
        />
        {errors?.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        {/* Password */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="p-4 rounded-md border border-gray-300"
          {...register("password")}
        />
        {errors?.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        <div>
          <input type="checkbox" {...register("showAge")} />
          {watchShowAge && (
            <input
              type="number"
              id="age"
              placeholder="Enter your age"
              className="p-4 rounded-md border border-gray-300"
              {...register("age")}
            />
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg mt-4 flex justify-center items-center"
      >
        {isSubmitting ? (
          <div className=" mx-auto w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default SignUpHook;
