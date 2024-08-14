import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Doc_Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [adh, setAdh] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
    // Authenticate doctor
    const response = await axios.post('http://localhost:4000/api/doctor/login', {
      doctorId: id,
      password: password,
    });

    if (response.status === 200) {
      // Save Aadhaar number to local storage
      localStorage.setItem('User', JSON.stringify({ adh }));
      // Navigate to personal details page
      navigate('/personal-details');
    } else {
      alert('Invalid credentials');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Invalid credentials');
  }
};

  return (
    <div>
      <h1>Doctor Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Doctor's Private ID:</label>
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
        <div>
          <label>Patient's Aadhaar Number:</label>
          <input
            type="text"
            value={adh}
            onChange={(e) => setAdh(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Doc_Login;
