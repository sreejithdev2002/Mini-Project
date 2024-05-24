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

  // const [userDetails, setUserDetails] = useState(null);

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
      <div className="loginUser">
        <h1 className="loginUsrh1">SHOOOZ</h1>
        <div className="loginUsr">
          <div className="loginSection">
            <form onSubmit={formik.handleSubmit}>
              <h1>Account Login</h1>
              <p>Please enter your email and password.</p>
              <div className="loginUserInput">
                <div className="loginUsername">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="loginEmail"
                    className="loginInput"
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
                <div className="loginPassword">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="loginPassword"
                    className="loginInput"
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
                <div className="loginSubmit">
                  <button type="submit">Login</button>
                </div>
                <br />
                <div className="loginOr">
                  <p>or</p>
                </div>
                <br />
                <div className="loginCreateAccount">
                  <button type="button" onClick={handleClick}>
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="loginImageSection">
            <img src={loginImage} alt="" className="loginImage" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
