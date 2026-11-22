import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Signup } from "../../../Services/UserApi";
import signupImage from "../../../assets/Images/signup.jpg";

function SignUp() {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await Signup(values);
        toast.success("Account created successfully!");
        navigate("/login");
      } catch (error) {
        toast.error("Failed to create account. Please try again.");
      }
    },
  });

  return (
    <div className="store-auth">
      {/* Left Side - Image/Brand */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/35 z-10"></div>
        <img 
          src={signupImage} 
          alt="Signup" 
          className="absolute inset-0 w-full h-full object-cover "
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1200";
          }}
        />
        <div className="relative z-20 text-center px-12">
          <h1 className="font-display text-5xl font-bold text-white tracking-tight mb-4">
            Join SHOOOZ
          </h1>
          <p className="text-gray-300 text-lg max-w-md mx-auto leading-relaxed">
            Create an account to track your orders, save to wishlist, and get exclusive access to our newest drops.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative overflow-y-auto">
        <Link to="/" className="absolute top-8 right-8 text-sm font-medium text-gray-500 hover:text-black transition-colors z-10">
          &larr; Back to Home
        </Link>
        
        <div className="w-full max-w-md space-y-6 animate-fade-in-up my-auto">
          <div className="text-center lg:text-left pt-12 lg:pt-0">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-2">
              Create Account
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Enter your details to get started.
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                className={`w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-black focus:outline-none transition-all ${
                  formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Enter your name"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.name}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                className={`w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-black focus:outline-none transition-all ${
                  formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Enter your email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.email}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                className={`w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-black focus:outline-none transition-all ${
                  formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Create a password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.password}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className={`w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-black focus:outline-none transition-all ${
                  formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Confirm your password"
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 bg-black text-white rounded-xl font-medium text-sm sm:text-base hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 duration-200"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-8">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-black hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
