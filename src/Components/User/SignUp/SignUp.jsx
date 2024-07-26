import React from "react";
import "./SignUp.css";
import signupImage from "../../../Assets/Images/signup.jpg";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { Signup } from "../../../Services/UserApi";

function SignUp() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const onSubmit = async (values) => {
    console.log(values);

    const { data } = await Signup(values);
    navigate("/login");
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="flex flex-col mt-4 mx-[50px] max-h-[100vh]">
        <h1 className="text-3xl" id="signupBrand">
          SHOOOZ
        </h1>
        <div className="flex my-[100px] items-center justify-evenly rounded-sm">
          <div className="flex justify-center items-center h-[57vh]">
            <form onSubmit={formik.handleSubmit} className="px-[50px]">
              <h1 className="text-4xl mb-2">Create your Account</h1>
              <p>Please enter your details.</p>
              <div>
                <div className="flex flex-col mt-2">
                  <label
                    htmlFor="name"
                    className="my-[5px] font-sans font-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="signupName"
                    className="p-2 focus:outline-2 focus:outline-red-400"
                    placeholder="Enter your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p
                      className="error-message"
                      style={{ marginTop: "5px", color: "red" }}
                    >
                      {formik.errors.name}
                    </p>
                  )}
                </div>
                <br />
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="my-[5px] font-sans font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="signupEmail"
                    className="p-2 focus:outline-2 focus:outline-red-400"
                    placeholder="Enter your email address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p
                      className="error-message"
                      style={{ marginTop: "5px", color: "red" }}
                    >
                      {formik.errors.email}
                    </p>
                  )}
                </div>
                <br />
                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="my-[5px] font-sans font-bold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="signupPassword"
                    className="p-2 focus:outline-2 focus:outline-red-400"
                    placeholder="Enter password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p
                      className="error-message"
                      style={{ marginTop: "5px", color: "red" }}
                    >
                      {formik.errors.password}
                    </p>
                  )}
                </div>
                <br />
                <div className="flex flex-col">
                  <label
                    htmlFor="confirmPassword"
                    className="my-[5px] font-sans font-bold"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="p-2 focus:outline-2 focus:outline-red-400"
                    placeholder="Confirm your password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <p
                        className="error-message"
                        style={{ marginTop: "5px", color: "red" }}
                      >
                        {formik.errors.confirmPassword}
                      </p>
                    )}
                </div>
                <br />
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="h-12 bg-red-500 hover:bg-red-600 transition-colors duration-300 w-[100%] text-white rounded-sm"
                  >
                    Sign Up
                  </button>
                </div>
                <br />
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={goToLogin}
                    className="h-12  text-red-500 hover:text-white hover:bg-red-500 border-2 border-red-500 transition-colors duration-300 rounded-sm w-[100%]"
                  >
                    Go to Login
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div>
            <img src={signupImage} alt="" className="hidden lg:block lg:h-[500px] lg:w-[500px] lg:ml-[50px]"
             />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
