import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Login.css'
import { FaApple, FaGoogle } from 'react-icons/fa';

function Login() {

    const handleSubmit = (event) => {
        event.preventDefault(); 
        alert('Logged in successfully!');
    };

    return (
        <div className='login'>
            <div className="login-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="login_fields">
                        <input type="text" placeholder='Email Id' required />
                        <input type="password" placeholder='Password' required />
                    </div>

                    <div className="login-remember">
                        <div className='login-checkbox'>
                            <input type="checkbox" name="" id="" /> <p>Remember me</p> 
                        </div>

                        <div className='login-forget-password'>
                            <p>Forget Password ?</p>
                        </div>
                    </div>

                    <div className='login-btn btn'>
                        <button type="submit">Login</button>
                    </div>
                </form>
                <p className="login-create">Don't have an account? <Link to="/signup" style={{textDecoration: 'none'}}>Create New Account</Link></p>

                <div className="login-or-account or-btn">
                    <hr /> <p>OR</p> <hr />
                </div>
                

                

                <div className="login-socialaccounts social-acc">
                    <div>
                        <FaGoogle className='login-icons-container social-icons'  />
                        <p>Sign in with Google</p>
                    </div>

                    <div>
                        <FaApple className='login-icons-container social-icons' />
                        <p>Sign in with Apple</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;
