import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Doc_Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id === '1234' && password === '4321') {
      navigate('/personal-details');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h1>Doctor sahab ye login aapke liye hai</h1>
      <h2> ID = 1234 PAS = 4321 dale aur patient ki details jane</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Doc_Login;
