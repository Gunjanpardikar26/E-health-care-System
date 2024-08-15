import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Doc_Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [adh, setAdh] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/doctor/login",
        {
          doctorId: id,
          password: password,
        }
      );

      if (response.status === 200) {
        // Save Aadhaar number to local storage
        localStorage.setItem("User", JSON.stringify({ adh }));
        navigate("/personal-details");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials");
    }
  };

  const handleSignup = () => {
    navigate('/new-doc');
  };

  return (
    <div>
      <h1>Doctor Login</h1>

      <label>Doctor's Private ID:</label>
      <input 
        type="text" 
        value={id} 
        onChange={(e) => setId(e.target.value)} 
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label>Patient's Aadhaar Number:</label>
      <input 
        type="text" 
        value={adh} 
        onChange={(e) => setAdh(e.target.value)} 
      />

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>New User</button>
    </div>
  );
};

export default Doc_Login;
