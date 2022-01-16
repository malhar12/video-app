import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "../../Header/Header";
import Shapes from '../../Shapes/Shapes';
import '../Login.scss';

const Signup = () => {

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordStatus, setPasswordStatus] = useState("");

    const handlePasswordChange = (e) => {
        const text = e.target.value;
        setPassword(text);
        const status = text.length > 8 ? 'Strong' : text.length > 4 ? 'Moderate' : text.length > 0 ? 'Low' : '';
        setPasswordStatus(status);
        console.log(fullname);
        console.log(email);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("in submit");
    }
    
    return (
        <div className="login-div signup-component">
            {/* <Shapes /> */}
            <HeaderComponent title="Create an account" showLine={true}></HeaderComponent>
            <div className="content">
                <form onSubmit={(e)=> onSubmit(e)}>
                    <div>
                        <label htmlFor="fullname" className="input-label">Full name</label>
                        <input 
                            type="text" 
                            placeholder="Enter your full name" 
                            id="fullname" 
                            name="fullname" 
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)} />
                    </div>
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
                        <label htmlFor="password" className="input-label">New Password</label>
                        <span className={`password-status ${passwordStatus}`}>{passwordStatus}</span>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            id="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => handlePasswordChange(e)} />
                    </div>
                    <button type="submit" className="submit-btn">Sign up</button>
                    <div className="panel signup-panel">
                        <span>Already user? </span>
                        <Link to="/" className="forgot-label">Login</Link>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;