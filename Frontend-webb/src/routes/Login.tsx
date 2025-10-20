import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { loginUser } from "../authSlices";
import "../styles/global.css";
import LoginButton from "../components/LogInButton";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { loading, error } = useSelector((state: RootState) => state.auth);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) return;

        try {
            // Kör login thunk och unwrap för att få payload eller throw error
            await dispatch(loginUser({ email, password })).unwrap();

            // Om login lyckas, navigera till dashboard
            navigate("/dashboard");
        } catch (err) {
            // Error hanteras av Redux state, men kan loggas här
            console.error("Login failed:", err);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">Grupp || Chas Academy</h1>
                <h2 className="login-subtitle">Log in</h2>

                <form onSubmit={handleLogin} className="login-form">
                    <input 
                        type="email"
                        placeholder="Username or Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        className="login-input"
                        required
                        disabled={loading}
                    />

                    <input 
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        className="login-input"
                        required
                        disabled={loading}
                    />

                    {error && <div className="error-message">{error}</div>}

                    <a href="#" className="forgot-password">
                        Forgot Password?
                    </a>

                    <LoginButton type="submit">
                        {loading ? "Logging in..." : "Log in"}
                    </LoginButton>
                </form>

                <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
                    <p>Test credentials:</p>
                    <p>Email: test@example.com</p>
                    <p>Password: chas</p>
                </div>
            </div>
        </div>
    );
};

export default Login;