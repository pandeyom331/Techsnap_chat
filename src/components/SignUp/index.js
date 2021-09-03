import React,{useState} from 'react'
import "./StylesSignUp.css";
import { Link } from 'react-router-dom';
import Image from '../../images/logo1.png';

function SignUp() {

 

  return (
    <>
      <div className="Container">
        <div className="FormWrap">
          <Link to='/'><img className="Icon" src={Image} /></Link>
          <div className="FormContent">
            <form className="Form" action='#'>
              <h1 className="FormH1">Sign-Up to your account</h1>
              <label className="FormLabel" htmlFor='for'>Email</label>
              <input className="FormInput" htmlFor='email' required />
              <label className="FormLabel" htmlFor='for'>Password</label>
              <input className="FormInput" htmlFor='password' required />
              <button className="FormButton" type='submit'>Continue</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;
