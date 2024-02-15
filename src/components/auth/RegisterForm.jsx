import React from "react";
import { Form } from "formik";
import { object, string } from "yup";

export const registerSchema = object({
  email: string()
    .email("Lütfen geçerli bir email giriniz")
    .required("Email girişi zorunludur"),
  password: string()
    .required("Şifre zorunludur.")
    .min(8, "Şifre en az 8 karakter içermelidir")
    .max(16, "Şifre en falza 16 karakter içermelidir")
    .matches(/\d+/, "Şifre en az bir rakam içermelidir")
    .matches(/[a-z]/, "Şifre en az bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir")
    .matches(
      /[@$!%*?&]+/,
      "Şifre en az bir özel karakter (@$!%*?&) içermelidir"
    ),
  username: string()
    .required("username zorunludur.")
    .min(3, "username en az 3 karakter içermelidir"),
  firstName: string()
    .required("firstName zorunludur.")
    .min(3, "firstName en az 3 karakter içermelidir"),
  lastName: string()
    .required("lastName zorunludur.")
    .min(3, "lastName en az 3 karakter içermelidir"),
  image: string()
    .required("image zorunludur.")
    .min(3, "image en az 3 karakter içermelidir"),
  city: string()
    .required("city zorunludur.")
    .min(3, "city en az 3 karakter içermelidir"),
  bio: string()
    .required("bio zorunludur.")
    .min(3, "bio en az 3 karakter içermelidir"),
});
const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Form>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            User name
          </label>
          <div className="mt-2">
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.username && (
            <p className="text-red-600">{errors.username}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.email && <p className="text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            First Name
          </label>
          <div className="mt-2">
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="firstName"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.firstName && (
            <p className="text-red-600">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Last Name
          </label>
          <div className="mt-2">
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="lastName"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.lastName && (
            <p className="text-red-600">{errors.lastName}</p>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.password && (
            <p className="text-red-600">{errors.password}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Image
          </label>
          <div className="mt-2">
            <input
              id="image"
              name="image"
              type="text"
              autoComplete="image"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.image && <p className="text-red-600">{errors.image}</p>}
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            City
          </label>
          <div className="mt-2">
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="city"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.city && <p className="text-red-600">{errors.city}</p>}
        </div>
        <div>
          <label
            htmlFor="bio"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Bio
          </label>
          <div className="mt-2">
            <input
              id="bio"
              name="bio"
              type="text"
              autoComplete="bio"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={values.bio}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.bio && <p className="text-red-600">{errors.bio}</p>}
        </div>

        <div>
          <button
            type="submit"
            className=" mt-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            REGISTER
          </button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
