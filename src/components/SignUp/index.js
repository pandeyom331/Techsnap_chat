import React, { useState } from 'react'
import "./StylesSignUp.css";
import { Link } from 'react-router-dom';
import Image from '../../images/logo1.png';
import Video from '../../videos/video1.mp4';

function SignUp() {

  const [pass, setpass] = useState(true);
  const [pass1, setpass1] = useState(true);

  return (
    <div className="Main">
      <div className="HeroBg">
        <video className="VideoBg" autoPlay loop muted src={Video} type='video/mp4' />
      </div>
      <div className="FormWrap">
        <Link to='/'><img className="Icon" src={Image} alt="Logo"/></Link>
        <div className="FormContent">
          <form className="Form" action='#'>
            <img className="user-icon" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/37746/preview.svg" alt="user-icon"></img>
            <h1 className="FormH1">Create Account</h1>
            <div class="input-box">
              <span><i class="fas fa-envelope"></i></span>
              <input className="FormInput" htmlFor='email' placeholder="Type your Email" required />
            </div>
            <div class="input-box">
              <span><i class="fas fa-key"></i></span>
              <input className="FormInput" type={pass ? "password" : "text"} htmlFor='password' placeholder="Type your Password" required />
              <icon className="eye"  onClick={() => setpass(!pass)}><i class={pass ? "far fa-eye-slash" : "far fa-eye"}></i></icon>
            </div>
            <div class="input-box">
              <span><i class="fas fa-key"></i></span>
              <input className="FormInput" type={pass1 ? "password" : "text"} htmlFor='password' placeholder="Confirm Password" required />
              <icon className="eye"  onClick={() => setpass1(!pass1)}><i class={pass1 ? "far fa-eye-slash" : "far fa-eye"}></i></icon>
            </div>
            <button className="FormButton" type='submit'><i class="fas fa-sign-in-alt"></i><Link class="WelcomeRoute" to='/welcome'>Sign Up</Link></button>
            <p>Already have an account? <Link to="/">Log In</Link> </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
