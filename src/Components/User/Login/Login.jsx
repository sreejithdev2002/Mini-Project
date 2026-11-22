import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { login } from "../../../Services/UserApi";
import loginImage from "../../../assets/Images/login.jpg";

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
        const { data } = await login(values);
        if (data.created) {
          localStorage.setItem("jwt", data.token);
          toast.success("Login Success", { position: "top-right" });
          navigate("/");
        } else {
          toast.error(data.message, { position: "top-right" });
        }
      } catch (error) {
        console.log(error);
        toast.error("An error occurred during login.");
      }
    },
  });

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Left Side - Image/Brand */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={loginImage} 
          alt="Login" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1552346154-21d32810baa3?auto=format&fit=crop&q=80&w=1200";
          }}
        />
        <div className="relative z-20 text-center px-12">
          <h1 className="font-display text-5xl font-bold text-white tracking-tight mb-4">
            SHOOOZ
          </h1>
          <p className="text-gray-300 text-lg max-w-md mx-auto leading-relaxed">
            Welcome back to your premium footwear destination. Discover the latest collections curated just for you.
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative">
        <Link to="/" className="absolute top-8 right-8 text-sm font-medium text-gray-500 hover:text-black transition-colors">
          &larr; Back to Home
        </Link>
        
        <div className="w-full max-w-md space-y-8 animate-fade-in-up">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Welcome back
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Please enter your details to sign in.
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6 mt-8">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
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
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                className={`w-full px-4 py-3 rounded-xl border bg-white focus:ring-2 focus:ring-black focus:outline-none transition-all ${
                  formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Enter your password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-xs text-red-500 mt-1">{formik.errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-black text-white rounded-xl font-medium text-sm sm:text-base hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 duration-200"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-8">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold text-black hover:underline">
              Create one now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
