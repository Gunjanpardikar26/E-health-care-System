// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function User_Login() {
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/api/login', {
//         method: 'POST',
//         headers: {  
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ userId, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem('User', JSON.stringify(data.user)); // Store user details or token
//         localStorage.setItem('UserId', userId);
//         navigate('/personal-details');
//       } else {
//         const errorData = await response.json();
//         alert(errorData.error);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('Error during login');
//     }
//   };

//   const handleSignup = () => {
//     navigate('/new-user');
//   }

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <input
//         type="text"
//         placeholder="User ID"
//         value={userId}
//         onChange={(e) => setUserId(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//       <button onClick={handleSignup}>New User</button>
//     </div>
//   );
// }

// export default User_Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Make sure to include your styles

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
    <div className="page-background">
      <div className="container" id="container">
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button" onClick={handleSignup}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            {/* <div className="social-icons">
              <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
              <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
            </div> */}
            <span>or use your email for login</span>
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
            <a href="#">Forget Your Password?</a>
            <button type="button" onClick={handleLogin}>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="login">Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Patient!</h1>
              <p>Register with your personal details to safeguard your emergency situation</p>
              <button onClick={handleSignup} className="hidden" id="register">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default User_Login;

