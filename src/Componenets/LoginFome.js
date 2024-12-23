import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [users, setUsers] = useState(() => {
        const storedUsers = localStorage.getItem('users');
        return storedUsers ? JSON.parse(storedUsers) : [];
    });

    const navigate = useNavigate();

    const handleLogin = () => {
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
            navigate('/quizapp');
        } else {
            setError('Invalid email or password');
        }
    };

    const handleSignUp = () => {
        if (!email || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        if (users.some((u) => u.email === email)) {
            setError('Email already registered');
            return;
        }
        const newUser = { email, password };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        setIsLogin(true);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    const CheckWeather = () => {
        navigate('./weather');
    };

    const PlayGame = () => {
        navigate('./game');
    };
    const PasswordGen = () => {
        navigate('./PasswordGen');
    };

    return (
        <div className="container" style={{ width: '30%', marginTop: '6%' }}>
            <button className="btn btn-info" onClick={CheckWeather} style={{ margin: '20px' }}>
                See Weather
            </button>
            <button className="btn btn-dark" onClick={PlayGame} style={{ margin: '20px' }}>
                Play Game
            </button>
            <div className="card p-4 shadow-lg">
                <div className="d-flex justify-content-center mb-4">
                    <button
                        className={`btn ${isLogin ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
                        onClick={() => {
                            setIsLogin(true);
                            setError('');
                        }}
                    >
                        Login
                    </button>
                    <button
                        className={`btn ${!isLogin ? 'btn-primary' : 'btn-outline-primary'} mx-2`}
                        onClick={() => {
                            setIsLogin(false);
                            setError('');
                        }}
                    >
                        Sign Up
                    </button>
                </div>

                {isLogin ? (
                    <div className="form-group">
                        <h3 className="text-center mb-4">Login Form</h3>
                        <input
                            type="email"
                            className="form-control mb-3"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="form-control mb-3"
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="text-danger text-center">{error}</p>}
                        <button className="btn btn-primary w-100" onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                ) : (
                    <div className="form-group">
                        <h3 className="text-center mb-4">Sign Up Form</h3>
                        <input
                            type="email"
                            className="form-control mb-3"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="form-control mb-3"
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            className="form-control mb-3"
                            placeholder="Confirm your Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {error && <p className="text-danger text-center">{error}</p>}
                        <button className="btn btn-primary w-100" onClick={handleSignUp}>
                            Sign Up
                        </button>
                 
                        <button  className="btn btn-primary w-100" onClick={PasswordGen} style={{marginTop:"20px"}}>Generate Password</button>
                    </div>
                )}
            </div>
        </div>
    );
}
