// import React from 'react';
// import './SignUp.css';
// import signupImage from '../../../Assets/Images/signup.jpg';
// import { useNavigate } from 'react-router-dom';

// function SignUp() {

//   const navigate = useNavigate();
//   const handleClick = () => navigate('/login');
//   return (
//     <>
//       <div className="signupUser">
//         <h1 className="signuph1">SHOOOZ</h1>
//         <div className="signup">
//         <div className="signupSection">
//           <form action="">
//             <h1>Create your Account</h1>
//             <p>Please enter your details.</p>
//             <div className="signupUserInput">
//               <div className="signupUsername">
//                 <label htmlFor="name">Username</label>
//                 <input
//                   type="name"
//                   name="name"
//                   id="signupName"
//                   className="signupInput"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>
//               <br />
//               <div className="signupEmail">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="signupEmail"
//                   className="signupInput"
//                   placeholder="Enter your email address"
//                   required
//                 />
//               </div>
//               <br />
//               <div className="signupPassword">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="signupPassword"
//                   className="signupInput"
//                   placeholder="Enter password"
//                   required
//                 />
//               </div>
//               <br />
//               <div className="signupPassword">
//                 <label htmlFor="password">Confirm Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="signupPassword"
//                   className="signupInput"
//                   placeholder="Confirm your password"
//                   required
//                 />
//               </div>
//               <br />
//               <div className="signupSubmit">
//                 <button type="submit">Sign Up</button>
//               </div>
//               <br />
//               <div className="signupOr">
//               <p>or</p>
//               </div>
//               <br />
//               <div className="signupLoginAccount">
//                 <button type="submit" onClick={handleClick}>Go to Login</button>
//               </div>
//             </div>
//           </form>
//         </div>
//         <div className="signupImageSection">
//           <img src={signupImage} alt="" className="signupImage" />
//         </div>
//       </div>
//       </div>
//     </>
//   )
// }

// export default SignUp

import React, { useState } from 'react';
import './SignUp.css';
import signupImage from '../../../Assets/Images/signup.jpg';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = () => navigate('/login');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Simulate successful login
    alert("Login Successful");
    // Redirect to homepage
    navigate('/');
  };

  return (
    <>
      <div className="signupUser">
        <h1 className="signuph1">SHOOOZ</h1>
        <div className="signup">
          <div className="signupSection">
            <form onSubmit={handleSubmit}>
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
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
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
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
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
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
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
                  <button type="button" onClick={handleClick}>Go to Login</button>
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
