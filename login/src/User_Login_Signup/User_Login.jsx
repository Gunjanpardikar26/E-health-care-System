import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css'; 


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

  const handleSignup = (event) => {
    event.preventDefault();
    navigate('/new-user');
  };

  return (

    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src="https://static.vecteezy.com/system/resources/previews/002/393/103/non_2x/doctor-in-mask-consulting-female-patient-physycian-sitting-at-the-desk-with-monitor-family-therapist-health-care-clinic-workspace-concept-stock-illustration-in-flat-style-isolated-on-white-vector.jpg"
            className="img-fluid" alt="Login illustration"/>
        </div>
        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>
  
              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>
  
              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-floating mx-1">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
  
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">Or</p>
            </div>
  
            {/* <!-- Email input --> */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="text" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter a valid Adhar Number" value={userId}
                onChange={(e) => setUserId(e.target.value)}/>
              <label className="form-label" for="form3Example3">Adhar Number</label>
            </div>
  
            {/* <!-- Password input --> */}
            <div data-mdb-input-init className="form-outline mb-3">
              <input type="password" id="form3Example4" className="form-control form-control-lg"
                placeholder="Enter password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
              <label className="form-label" for="form3Example4">Password</label>
            </div>
  
            <div className="d-flex justify-content-between align-items-center">
              {/* <!-- Checkbox --> */}
              <div className="form-check mb-0">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label className="form-check-label" for="form2Example3">
                  Remember me
                </label>
              </div>
              <a href="#!" className="text-body">Forgot password?</a>
            </div>
  
            <div className="text-center text-lg-start mt-4 pt-2">
              <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
                style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={handleLogin}>Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#" className="link-danger" role="button" onClick={handleSignup}>Register</a>
              </p>
            </div>
  
          </form>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default User_Login;
