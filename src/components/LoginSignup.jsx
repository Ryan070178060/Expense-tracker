import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = () => {
    console.log("Login Function Executed", formData);
    // Simulate login functionality
    alert("Logged in successfully!");
    redirectToHomePage();
  };

  const signup = () => {
    console.log("Signup Function Executed", formData);
    // Simulate signup functionality
    alert("Signed up successfully!");
    redirectToHomePage();
  };

  const redirectToHomePage = () => {
    window.location.replace("/"); // Redirect to home page
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" /> : null}
          <input name='email' value={formData.email} onChange={changeHandler} type="text" placeholder="Email Address" />
          <input name='password' value={formData.password} onChange={changeHandler} type="text" placeholder="Password" />
        </div>
        <button onClick={state === "Login" ? login : signup}>Continue</button>
        {state === "Sign Up" ?
          <p className="loginsignup-login">Already have an account?<span onClick={() => { setState("Login") }}>Login here</span></p>
          :
          <p className="loginsignup-login">Create an Account<span onClick={() => { setState("Sign Up") }}>Click here</span></p>
        }
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
