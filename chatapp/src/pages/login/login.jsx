import React, { useState } from 'react'
import './login.css'
import assets from '../../assets/assets'
const login = () => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="login_form">
        <h2>{currState}</h2>
        {currState === "Sign Up" ? <input type='text' placeholder='Username' className="form-input" required /> : null}
        <input type='email' placeholder='Email Address' className="form-input" required />
        <input type='password' placeholder='Password' className="form-input" required />
        <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login Now"}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use and Privacy Policy</p>
        </div>
        <div className="login-forget">
          {currState === "Sign Up"?<p className="login-toggle">Alredy have an account <span onClick={() => setCurrState("Login")}>Login Here</span></p>:<p className="login-toggle">Create an Account <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>}
    </div>
      </form >
    </div >
  )
}

export default login