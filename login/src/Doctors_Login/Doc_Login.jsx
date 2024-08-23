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
        "http://localhost:4000/api/login_doctor",
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

  const handleSignup = (event) => {
    event.preventDefault();
    navigate('/new-doc');
  };

  return (
    
    <section className="vh-100">
    <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-9 col-lg-6 col-xl-5">
          <img src="https://img.freepik.com/premium-photo/doctors-environmental-medicine-connecting-health-planet_481747-32171.jpg"
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
            {/* <!-- Doctors Private-ID input --> */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="text" className="form-control form-control-lg"
                placeholder="Enter Doctors Private-ID" value={id} 
                    onChange={(e) => setId(e.target.value)}/>
              <label className="form-label">Doctors Private-ID</label>
            </div>

            {/* <!-- Patient Adhar input --> */}
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="text" className="form-control form-control-lg"
                placeholder="Enter Patient's Adhar Number" value={adh} 
                    onChange={(e) => setAdh(e.target.value)}/>
              <label className="form-label" >Patient's Adhar Number</label>
            </div>
  
            {/* <!-- Password input --> */}
            <div data-mdb-input-init className="form-outline mb-3">
              <input type="current-password" className="form-control form-control-lg"
                placeholder="Enter password" value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
              <label className="form-label" >Password</label>
            </div>
  
            <div className="d-flex justify-content-between align-items-center">
              {/* <!-- Checkbox --> */}
              <div className="form-check mb-0">
                <input className="form-check-input me-2" type="checkbox" value="" />
                <label className="form-check-label" >
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
};

export default Doc_Login;
