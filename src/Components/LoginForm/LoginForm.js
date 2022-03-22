import React from 'react';
import './LoginForm.css';
import logo from '../images/blue-logo 1.png';
import google from '../images/Group 364.png';
const LoginForm = () => {
    return (
        <div className='loginContainer'>

            <form  >
                <div class="imgcontainer">
                    <img src={logo} alt="Avatar" class="avatar" />
                </div>
                <h6>Explore The Best Tours... Hurry up!!</h6>
                <div class="container">

                    <input type="text" placeholder="Enter Username" name="uname" required />


                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>

                </div>
                <div class="password" >
                    <span class="psw">Forgot Password? </span>
                </div>


            </form>
            <div className="footer">
                <p>or</p>
                <img src={google} alt="" />
            </div>
            <div>
                
            </div>


        </div>
    );
};

export default LoginForm;