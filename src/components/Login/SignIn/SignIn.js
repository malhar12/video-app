import React, { useState } from "react";
import { Link } from "react-router-dom";
import Shapes from "../../Shapes/Shapes";
import HeaderComponent from "../../Header/Header";
import '../Login.scss';
import BackgroundImage from '../../../assets/background-image.png';

const Signin = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("in submit");
    }
    
    return (
        <div className="login-div signin-component">
            {/* <Shapes /> */}
            <HeaderComponent title="Sign In" showLine={false}></HeaderComponent>
            <div className="content">
                <form onSubmit={(e)=> onSubmit(e)}>
                    <div>
                        <label htmlFor="email" className="input-label">Email address</label>
                        <input 
                            type="text" 
                            placeholder="Enter your Email address" 
                            id="email"
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} /> 
                    </div>
                    <div className="panel">
                        <label htmlFor="password" className="input-label">Password</label>
                        <Link to="/signup" className="forgot-label">Forgot?</Link>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            id="password"
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} /> 
                    </div>
                    <button type="submit" className="submit-btn">Login</button>
                    <div className="panel signup-panel">
                        <span>New here? </span>
                        <Link to="/signup" className="forgot-label">Signup</Link>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;