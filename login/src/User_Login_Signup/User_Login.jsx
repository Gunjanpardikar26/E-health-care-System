import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function User_Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userId === '1234' && password === '4321') {
      navigate('/personal-details');
    } else {
        alert('Invalid credentials');
    }
  };
  const handleSignup = () => {
    navigate('/new-user');
  }

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>New User</button>
    </div>
  );
}

export default User_Login;
