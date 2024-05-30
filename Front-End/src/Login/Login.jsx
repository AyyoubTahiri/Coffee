import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Usercontext } from '../Context/AuthProvider';
// import UserApi from '../../Service/api/UserApi';
// import 'ldrs/quantum'
// import { axiosClient, fetchCSRFToken } from '@/api/axios';
// import { Usercontext } from '@/Context/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../components/Redux/authActions';
const Login = () => {
    // const { login, setAuthenticated, setToken ,loading,authenticated,setUser} = Usercontext()
    const [email,setEmail]=useState('');
    const dispatch = useDispatch();
    const { user, authenticated, loading } = useSelector(state => state.auth);
    const [password,setPassword]=useState('');
    const [ErrMsg,setErrMsg]=useState('');
    const [saveMe,setSaveMe]=useState(false)
    const [isActive, setIsActive] = useState(false);
    const navigate=useNavigate()
    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    useEffect(() => {
      const savedEmail = window.localStorage.getItem('email');
      const savedPassword = window.localStorage.getItem('password');
      if (savedEmail && savedPassword) {
        setEmail(savedEmail);
        setPassword(savedPassword);
        setSaveMe(true);
      }
    }, []);
    const HandleLogin= async(e)=>{
        e.preventDefault()
        setErrMsg("")
        console.log('Attempting login with:', { email, password });

        try {
            const { token, user } = await dispatch(login(email, password));          

          if (authenticated) {
              if (saveMe) {
                  window.localStorage.setItem('email', email);
                  window.localStorage.setItem('password', password);
              } else {
                  window.localStorage.removeItem('email');
                  window.localStorage.removeItem('password');
              }
              const rolePath = getRolePath(user.idRole);
              navigate(rolePath);
          }
      } catch (error) {
          console.error("Login error:", error);
          if (error.response) {
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
                  default:
                      setErrMsg('Échec de la connexion. Veuillez réessayer');
              }
          } else {
              setErrMsg('Aucune réponse du serveur');
          }
      }
  };

  const getRolePath = (roleId) => {
      switch (roleId) {
          case 1: return '/gest/dashboard';
          case 2: return '/client/home';
          case 3: return '/gest/personnel';
          default: return '/';
      }
  };

  useEffect(() => {
      if (authenticated && user) {
          const rolePath = getRolePath(user.idRole);
          navigate(rolePath);
      }
  }, [authenticated, user, navigate]);
    // if (loading || !authenticated) {
    //     return <div className="text-center text-primary" >


    //         <l-quantum
    //             size="45"
    //             speed="1.75"
    //             color="#039ee3"
    //         ></l-quantum>
    //     </div>;
    // }

    return (
        <div className='all-container'>
        <div className={`container-loggin ${isActive ? "active" : ""}`} id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                    <button onClick={()=>navigate('/')}>Annuler</button>

                </form>
            </div>
            <div className="form-container sign-in">
                <form>
                    <h1>Log In</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#" className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" value={email} placeholder="Email"  name='email' onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" value={password} placeholder="Password" name='password' onChange={(e)=>setPassword(e.target.value)} />
                    <a href="#">Forget Your Password?</a>
                    <input type="checkbox" name="saveMe" id="saveMe" style={{ display:'' }} onChange={(e)=>setSaveMe(e.target.checked)}/>Save Me 
                    <button type='submit' onClick={HandleLogin}>Log In</button>
                    <button onClick={()=>navigate('/')}>Annuler</button>
                    { ErrMsg && <p className='Error'>{ErrMsg}</p>}
                </form>
            </div>
            <div className="" id='toggle-container'>
                <div className="" id='toggle'>
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="btn" onClick={handleLoginClick}>Log In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button className="btn " onClick={handleRegisterClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Login;
