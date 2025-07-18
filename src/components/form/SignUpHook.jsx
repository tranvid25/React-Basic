import React, { useEffect } from "react";
import { useForm, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// ✅ Validation schema
const schema = yup.object({
  firstName: yup
    .string()
    .required("Please enter your firstName")
    .max(10, "Only enter 10 characters or less"),
  lastName: yup
    .string()
    .required("Please enter your lastName")
    .max(10, "Only enter 10 characters or less"),
  email: yup
    .string()
    .required("Please enter your email")
    .email("Email is invalid"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
  gender: yup.string().required("Please select your gender"),
  country: yup.string().required("Please select your country"),
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
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const watchCountry = watch("country");

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
      gender: "",
      country: "",
      otherCountry: "",
    });
  };

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className="p-10 w-full max-w-[500px] mx-auto border border-blue-300"
    >
      <h2 className="text-center pb-5 font-semibold text-blue-500 text-2xl">
        Register
      </h2>

      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          {...register("firstName")}
          className="p-4 rounded-lg border border-gray-300"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          {...register("lastName")}
          className="p-4 rounded-lg border border-gray-300"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Enter your email"
          {...register("email")}
          className="p-4 rounded-lg border border-gray-300"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          {...register("password")}
          className="p-4 rounded-lg border border-gray-300"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
          {...register("confirmPassword")}
          className="p-4 rounded-lg border border-gray-300"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}

        {/* Gender Radio */}
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

        {/* Country Select */}
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
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country.message}</p>
          )}
        </div>

        {/* If country === other => show input */}
        {watchCountry === "other" && (
          <div>
            <label htmlFor="otherCountry">Other Country</label>
            <MyInput
              name="otherCountry"
              control={control}
              placeholder="Enter your country"
            />
            {errors.otherCountry && (
              <p className="text-red-500 text-sm">
                {errors.otherCountry.message}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Submit Button */}
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

// ✅ Custom Input
const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 rounded-md border border-gray-300 w-full"
      {...field}
      {...props}
    />
  );
};

export default Formregisterfinal;
