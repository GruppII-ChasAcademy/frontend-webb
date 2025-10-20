import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { loginUser } from "../store";
import "../styles/global.css"
import LoginButton from "../components/LogInButton";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error, user } = useSelector((state: any) => state.auth || {});

const handleLogin = (e:React.FormEvent) => {
  e.preventDefault();
  dispatch(loginUser({email, password}));
};

    return (
        <div className="login-container">
        <div className="login-box">
        <h1 className="login-title">Grupp || Chas Academy</h1>
        <h2 className="login-subtitle">Log in</h2>

        <form onSubmit={handleLogin} className="login-form">
        <input type="text"
        placeholder="Username or Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} className="login-input" 
        />

        <input 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} className="login-input"
         />
         <a href="#" className="forgot-password">
            Forgot Password?
         </a>

        <LoginButton type="submit">
            Log in
        </LoginButton>
        </form>
        </div>
        </div>
        
    );
};

export default Login;