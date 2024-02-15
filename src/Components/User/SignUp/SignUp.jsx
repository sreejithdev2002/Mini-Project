import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './SignUp.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    // For demo purpose, we'll just console log the entered credentials
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="signup-container">
      <h2 id='signupH2'>Sign Up</h2>
        <form onSubmit={handleSignup} className='signupForm'>
        <input
            type="name"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='signupInput'
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='signupInput'
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='signupInput'
          />
          <button type="submit" id='SignupBtn'>Signup</button>
          <p className='loginLink'><Link to="/login">Already have an account? Login</Link></p>
        </form>
    </div>
  );
};

export default Signup;
