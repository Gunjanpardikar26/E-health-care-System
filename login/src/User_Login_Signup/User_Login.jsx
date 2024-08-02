/*import React, { useState } from 'react';
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

export default User_Login;*/


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
        body: JSON.stringify({ userId, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('User', JSON.stringify(data.user)); // Store user details or token
        localStorage.setItem('UserId', userId);
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

