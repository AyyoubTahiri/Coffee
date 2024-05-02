import '../assets/css/login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import google from  "../assets/google.png";
import bg from "../assets/BackCafe.png";
import { useState } from 'react';
import { axiosClient } from '../api/axios';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Please enter a strong password. It must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters.");
      return;
    }

    try{
      axiosClient.post('/login',{email,password})
    }catch (error){
    console.log(error);
  }
}
  return (
    <div className='bady'>
      {/*--------------------- Main Container ------------------------*/}
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        {/*--------------------- Login Container ------------------------*/}
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          {/*------------------------- Left Box ---------------------------*/}
          <div className="col-md-6 rounded-4 d-flex  flex-column  p-0 m-0" style={{ background: "#8b4513" }}>
            <img src={bg} className="img-fluid  h-100 rounded-4 d-flex  align-items-center w-100 left-box py-0" alt="Background" />
          </div>
          {/*------------------ ------ Right Box --------------------------*/}
          <div className="col-md-6 right-box">
            <div className="row align-items-center">
              <div className="header-text mb-4">
                <h2>Hello, Again</h2>
                <p>We are happy to have you back.</p>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Email address" onChange={handleEmailChange} />
              </div>
              <div className="input-group mb-1">
                <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" onChange={handlePasswordChange} />
              </div>
              <div className="input-group mb-5 d-flex justify-content-between">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="formCheck" />
                  <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                </div>
                <div className="forgot">
                  <small><a href="#">Forgot Password?</a></small>
                </div>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg  w-100 fs-6 text-light" style={{ background: "#8b4513" }} onClick={handleSubmit}>Login</button>
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-light w-100 fs-6"><img src={google} style={{ width: 20 }} className="ms-2 mt-auto" alt="Google" /><small className=''>Sign In with Google</small></button>
              </div>
              <div className="row">
                <small>Dont have an account? <a href="#">Sign Up</a></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}