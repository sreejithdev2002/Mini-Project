import React from 'react';
import './SignUp.css';
import signupImage from '../../../Assets/Images/signup.jpg';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function SignUp() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Perform signup logic here
      alert("Signup Successful");
      // Redirect to homepage
      navigate('/');
    },
  });

  return (
    <>
      <div className="signupUser">
        <h1 className="signuph1">SHOOOZ</h1>
        <div className="signup">
          <div className="signupSection">
            <form onSubmit={formik.handleSubmit}>
              <h1>Create your Account</h1>
              <p>Please enter your details.</p>
              <div className="signupUserInput">
                <div className="signupUsername">
                  <label htmlFor="name">Username</label>
                  <input
                    type="text"
                    name="name"
                    id="signupName"
                    className="signupInput"
                    placeholder="Enter your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && <p className="error-message" style={{ marginTop: "5px", color: "red"}}>{formik.errors.name}</p>}
                </div>
                <br />
                <div className="signupEmail">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="signupEmail"
                    className="signupInput"
                    placeholder="Enter your email address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && <p className="error-message" style={{ marginTop: "5px", color: "red"}}>{formik.errors.email}</p>}
                </div>
                <br />
                <div className="signupPassword">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="signupPassword"
                    className="signupInput"
                    placeholder="Enter password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && <p className="error-message" style={{ marginTop: "5px", color: "red"}}>{formik.errors.password}</p>}
                </div>
                <br />
                <div className="signupPassword">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="signupInput"
                    placeholder="Confirm your password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="error-message" style={{ marginTop: "5px", color: "red"}}>{formik.errors.confirmPassword}</p>}
                </div>
                <br />
                <div className="signupSubmit">
                  <button type="submit">Sign Up</button>
                </div>
                <br />
                <div className="signupOr">
                  <p>or</p>
                </div>
                <br />
                <div className="signupLoginAccount">
                  <button type="button" >Go to Login</button>
                </div>
              </div>
            </form>
          </div>
          <div className="signupImageSection">
            <img src={signupImage} alt="" className="signupImage" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;
