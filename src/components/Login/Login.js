import React, { useEffect,useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import "./login.css";
function Login() {
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    const handleSignUpClick = () => {
      container.classList.add("right-panel-active");
    };

    const handleSignInClick = () => {
      container.classList.remove("right-panel-active");
    };

    signUpButton.addEventListener("click", handleSignUpClick);
    signInButton.addEventListener("click", handleSignInClick);

    return () => {
      signUpButton.removeEventListener("click", handleSignUpClick);
      signInButton.removeEventListener("click", handleSignInClick);
    };
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange=(e)=>{
    setName(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response=await axios.post('http://localhost:5000/login',{
        email,password
      })
      // console.log('Login successful', response.data);
      navigate('/')
    } catch (error) {
      // console.error('Login failed:', error);
      alert('Unauthorised access')
      navigate('/login')
    }
  };
  const handleSignUp=async(e)=>{
    e.preventDefault();
    try {
      const response=await axios.post('http://localhost:5000/signup',{
        name,password,email
      })
      navigate('/login')
      alert('Signed UP Now Login')
    } catch (error) {
      console.error(error,"Please Try Again")
      alert('failed')
    }
  }
  return (
    <div className='body'>
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form method="post">
            <h1>Create Account</h1>
            <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f" />
              </a>
              <a href="#" class="social">
                <i class="fab fa-google" aria-hidden="true" />
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" value={name} onChange={handleNameChange}/>
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            <button type="submit" onClick={handleSignUp}>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f" />
              </a>
              <a href="#" class="social">
                <i class="fab fa-google" />
              </a>
            </div>
            <span>or use your account</span>
            <input type="email"placeholder="Email" value={email} onChange={handleEmailChange}/>
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
            <a href="#">Forgot your password?</a>
            <button type="submit" onClick={handleSubmit}>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h2 className="greet-welcome">Welcome Back!</h2>
              <button class="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h2 className='greet'>Hello, Guest!</h2>
              <p>Connect with us</p>
              <button class="ghost-2" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
