
import '../assets/css/login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import google from  "../assets/google.png";
import bg from "../assets/BackCafe.png";
import { useState } from 'react';
import { axiosClient } from '../api/axios';
import { Usercontext } from '../Context/AuthProvider';

export default function LoginForm() {
  const {login, setAuthenticated, setToken} = Usercontext()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
const handleSubmit=async(e)=> {
    e.preventDefault();


    // Validate email format
    try {
      const response = await login(email, password);
      const { status, data } = response;
      if (status === 200 || status === 204) {
        setAuthenticated(true);
        if (data.token) {
          setToken(data.token);
        }
        navigate('/user');
      }
    } catch (error) {
      console.error("Loginnn error :", error);
      if (error.response) {
        console.log('statuss:' + error.response.status);
        switch (error.response.status) {
          case 401:
            setErrMsg('Non autorisé. Vérifiez vos identifiants "Email ou Password"');
            break;
          case 400:
            setErrMsg('Adresse email ou mot de passe manquant');
            break;
          case 500:
            setErrMsg('Un problème est survenu sur le serveur. Veuillez réessayer plus tard.');
            break;
        }
      } else if (!error.response) {
        setErrMsg('Aucune réponse du serveur');

      } else {
        setErrMsg('Échec de la connexion. Veuillez réessayer');
      }
    }
    // Validate password strength
  
 
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