import React from "react"; // Import useState
import "./Login.css";
import loginImage from "../../../Assets/Images/login.jpg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { toast } from "react-toastify";

import { login } from "../../../Services/UserApi";

function Login() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        console.log("On Submit !!!");
        const { data } = await login(values);
        console.log(data, "USER RETURN DATA !!!");
        if (data.created) {
          localStorage.setItem("jwt", data.token);
          toast.success("Login Success", { position: "top-right" });
          navigate("/");
        } else {
          toast.error(data.message, { position: "top-right" });
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleClick = () => navigate("/signup");

  return (
    <>
      <div className="flex flex-col my-5 mx-[50px]">
        <h1 className="text-3xl" id="loginBrand">
          SHOOOZ
        </h1>
        <div className="flex my-[100px] items-center justify-evenly rounded-sm">
          <div className="flex justify-center items-center h-[57vh]">
            <form onSubmit={formik.handleSubmit} className="px-[50px]">
              <h1 className="text-4xl mb-2">Account Login</h1>
              <p>Please enter your email and password.</p>
              <div>
                <div className="flex flex-col mt-2">
                  <label
                    htmlFor="email"
                    className="my-[10px] font-sans font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="loginEmail"
                    className="p-2"
                    placeholder="Enter your email"
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
                    className="my-[10px] font-sans font-bold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="loginPassword"
                    className="p-2"
                    placeholder="Enter your password"
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
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="h-12 bg-red-500 hover:bg-red-600 transition-colors duration-300 w-[100%] text-white rounded-sm"
                  >
                    Login
                  </button>
                </div>
                <br />
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={handleClick}
                    className="h-12  text-red-500 hover:text-white hover:bg-red-500 border-2 border-red-500 transition-colors duration-300 rounded-sm w-[100%]"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div>
            <img
              src={loginImage}
              alt=""
              className="hidden lg:block lg:h-[400px] lg:w-[400px] lg:ml-[50px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
