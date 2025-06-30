import React from "react";
import { useForm } from "react-hook-form";

const SignUpHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100"
          defaultValue="Vĩ"
          {...register("firstName", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors?.firstName?.type == "required" && (
          <div className="text-red-500 text-sm">Please fill out this field</div>
        )}
        {errors?.firstName?.type == "maxLength" && (
          <div className="text-red-500 text-sm">
            Must be 10 character or less
          </div>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="p-4 rounded-md border border-gray-100"
          {...register("email")}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          className="p-4 rounded-md border border-gray-100"
          {...register("password")}
        />
      </div>

      <button
        type="submit"
        className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUpHook;
