import React from 'react'
import "../SignUp/StylesSignUp.css";
import { Link } from 'react-router-dom';
import Image from '../../images/logo1.png';

function LoginIn() {
    return (
        <>
        <div className="Container">
        <div className="FormWrap">
        <Link to='/'><img className="Icon" src={Image} /></Link>
          <div className="FormContent">
            <form className="Form" action='#'>
              <h1 className="FormH1">Log-In to your account</h1>
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

export default LoginIn
