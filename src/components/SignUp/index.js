import React,{useState} from 'react'
import "./StylesSignUp.css";
import { Link } from 'react-router-dom';
import Image from '../../images/logo1.png';

function SignUp() {

 

  return (
    <div className="Container">
        <div className="FormWrap">
          <Link to='/'><img className="Icon" src={Image} /></Link>
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
                <input className="FormInput" htmlFor='password' placeholder="Type your Password" required />
              </div>
              <button className="FormButton" type='submit'><i class="fas fa-sign-in-alt"></i>Sign Up</button>
              <p>Already have an account? <Link to="/">Log In</Link> </p>
            </form>
          </div>
        </div>
      </div>
  )
}

export default SignUp;
