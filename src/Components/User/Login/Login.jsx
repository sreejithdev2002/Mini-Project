import React, { useState } from 'react';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', email, password);
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    console.log('Forgot Password:', email);
    setForgotPassword(true);
  };

  const handleResetPassword = () => {
    // Add your reset password logic here
    console.log('Reset Password:', email);
    setForgotPassword(false);
  };

  return (
    <div className="login-container">
      <h2 id='loginH2'>Login</h2>
      {!forgotPassword ? (
        <form onSubmit={handleLogin} className='loginForm'>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='loginInput'
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='loginInput'
          />
          <button type="submit" className='loginBtn'>Login</button>
          <p onClick={handleForgotPassword} id='loginForgotPassword'>Forgot password?</p>
        </form>
      ) : (
        <div className='loginFormForgotPassword'>
          <p id='loginForgotPassword'>Please enter your email to reset your password.</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='loginInput'
          />
          <button onClick={handleResetPassword} className='loginBtn'>Reset Password</button>
          <button onClick={() => setForgotPassword(false)} className='loginBtn'>Go back to login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
