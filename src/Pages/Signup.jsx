import React, { useState } from 'react';
import './CSS/Signup.css';
import { Link } from 'react-router-dom';
import { FaApple, FaGoogle } from 'react-icons/fa';


function Signup() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Toggle checkbox state
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        if (isChecked) {
            // Perform form submission logic here (e.g., send data to server)
            alert('Account Created successfully!');
        } else {
            alert('Please agree to the terms of use and privacy policy.');
        }
    };

    return (
        <div className='signup'>
            <div className="signup-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="signup_fields">
                        <input type="text" placeholder='Your Name' required />
                        <input type="email" placeholder='Email Address' required />
                        <input type="password" placeholder='Password' required />
                    </div>

                    <div className="signup-agree">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            required  // Make the checkbox required
                        />
                        <p>By continuing, I agree to the terms of use and privacy policy.</p>
                    </div>

                    <div className='signup-btn btn'>
                       <button type="submit">Continue</button>
                    </div>

                </form>
                <p className="signup-login">Already have an account? <Link to="/login" style={{textDecoration: 'none'}}><span>Login Here</span></Link></p>

                <div className="signup-or-account or-btn">
                    <hr /> <p>OR</p> <hr />
                </div>
                

                

                <div className="signup-socialaccounts social-acc">
                    <div className='s1'>
                        <FaGoogle className='signup-icons-container social-icons' />
                        <p>Sign in with Google</p>
                    </div>

                    <div className='s2'>
                        <FaApple className='signup-icons-container social-icons' />
                        <p>Sign in with Apple</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Signup;


