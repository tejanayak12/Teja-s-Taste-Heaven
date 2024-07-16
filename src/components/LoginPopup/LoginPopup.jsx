import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Login");

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Please Enter Password' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By Continuing, I Agree To The Terms Of Use & Privacy, Policy.</p>
                </div>
                {currentState === "Login"

                    ? <p>Create A New Account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p>
                    : <p>Already Have An Account? <span onClick={() => setCurrentState("Login")}>Login Here</span></p>
                }

            </form>
        </div>
    )
}

export default LoginPopup
