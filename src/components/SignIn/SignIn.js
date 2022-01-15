import React from 'react';
import { Link } from 'react-router-dom';
import Shapes from '../Shapes/Shapes.js';
import './SignIn.scss';

const SignIn = () => {

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("in submit");
    }

    return (
        <>
            <div className="signin-component">
                <Shapes />
                <h3>Sign In</h3>
                <div className="content">
                    <form onSubmit={(e)=> onSubmit(e)}>
                        <div>
                            <label htmlFor="email" className="input-label">Email address</label>
                            <input type="text" placeholder="Enter your Email address" id="email" />
                        </div>
                        <div className="panel">
                            <label htmlFor="password" className="input-label">Password</label>
                            <Link to="/signup" className="forgot-label">Forgot?</Link>
                            <input type="password" placeholder="Enter your password" id="password" />
                        </div>
                        <button type="submit" className="submit-btn">Login</button>
                        <div className="panel signup-panel">
                            <span>New here? </span>
                            <Link to="/signup" className="forgot-label">Signup</Link>
                            </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;