import React from "react";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import  useAuthCalls  from "../../hooks/useAuthCalls";
const LoginForm = () => {
  const { login } = useAuthCalls();
  const loginSchema = object({
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
  });
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        // BURADA NELER YAPILIR???
        // LOGIN POST İSTEĞİ
        // VERİLER GLOBAL STATE'E AKTARILABİLİR
        // NAVİGASYON YAPILABİLİR
        // TOST MESSAGE YAPILABİLİR
        login(values);
        actions.resetForm();
        // setSubmitting submit edilme sürecinde true oluyor, submit bittiğinde false çeviriyoruz, işimize yararsa kullanırız
        actions.setSubmitting(false);
      }}
    >
      {({ handleChange, values, errors }) => (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form>
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
                />
              </div>
              <p className="text-red-600">{errors.email}</p>
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
                />
              </div>
              <p className="text-red-600">{errors.password}</p>
            </div>

            <div>
              <button
                type="submit"
                className=" mt-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </Form>

          <div className="flex justify-evenly items-center mt-10">
            <p className=" text-center text-sm text-gray-500">Not a member?</p>
            <a
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              REGISTER
            </a>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
