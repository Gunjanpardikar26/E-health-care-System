import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function User_Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adh: userId, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('User', JSON.stringify({ adh: userId })); // Store Adhar number
        navigate('/personal-details');
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login');
    }
  };

  const handleSignup = () => {
    navigate('/new-user');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Adhar Number"
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
