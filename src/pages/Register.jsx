import React from "react";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import useAuthCalls from "../hooks/useAuthCalls";
import { Formik } from "formik";

const Register = () => {
  const { register } = useAuthCalls();
  return (
 
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            REGISTER
          </h2>
        </div>
        <Formik
          initialValues={{
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            image: "",
            city: "",
            bio: "",
          }}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            register(values);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          // Login sayfasından farklı olarak RegisterForm şeklinde kodları böldük
          component={(props) => <RegisterForm {...props} />}
        ></Formik>
      </div>
 
  );
};

export default Register;
