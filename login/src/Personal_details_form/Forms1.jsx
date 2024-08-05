import React, { useState } from 'react';
import './Forms.css'
import { useNavigate } from 'react-router-dom';
// import Personal_Details from './Personal_Details/Personal_Details';

function Forms() {
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [mname,setMname] = useState("");
    const [dob,setDob] = useState(new Date());
    const [gender,setGender] = useState("");
    const[per_phn, setPer_phn] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const[curr_add, setCurr_add] = useState("");
    const[adh, setAdh] = useState("");
    const[emer_phn1, setEmer_phn1] = useState("");
    const[emer_phn2, setEmer_phn2] = useState("");
    const navigate = useNavigate();
    //upload adhar function to be implememted in future

    const collectData = async(e) =>{
      e.preventDefault();
      
      try {
        let result = await fetch('http://localhost:4000/api/register', {
          method: 'POST',
          //body: JSON.stringify({name:fname, email, password}),
          body: JSON.stringify({
            fname,
            lname,
            mname,
            dob,
            gender,
            per_phn,
            email,
            password,
            curr_add,
            adh,
            emer_phn1,
            emer_phn2,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          
        });
    
        if (!result.ok) {
          throw new Error('Network response was not ok');
        }
        
        result = await result.json(); // Corrected the response parsing
        localStorage.setItem("User", JSON.stringify(result));
        navigate('/personal-details');
      } catch (error) {
        console.error('Error:', error);
      }
        
      
    };
    
  return (
    <div className="container1">
        <form onSubmit={collectData}>
          
            <h2 className='text-center pt-3'>PERSONAL INFORMATION</h2> 

            <div className='mb-3'>
              <label className='form-label'>First Name</label>
              <input type="text" className='form-control'
              value={fname}
              onChange={(e) =>setFname(e.target.value)}/>              
            </div>

            <div className='mb-3'>
              <label className='form-label'>Email</label>
              <input type="email" className='form-control'
              value={email}
              onChange={(e) =>setEmail(e.target.value)}/>              
            </div>
            
            <div className='mb-3'> 
              <label className='form-label'>Middle Name</label>
              <input type="text" className='form-control'
              value={mname}
              onChange={(e) =>setMname(e.target.value)}/>              
            </div>

            <div className='mb-3'>
              <label className='form-label'>Last Name</label>
              <input type="text" className='form-control'
              value={lname}
              onChange={(e) =>setLname(e.target.value)}/>              
            </div>

            <div>
            <label className='form-label'>Date of Birth:</label>
            <br />
            <input
              type="date"
              // onChange={handleChange}
              // ref={dateInputRef}
              value={dob}
              onChange={(e) =>setDob(e.target.value)}
            />
            </div>

            

            <div className='mb-3'>
              <label className='form-label'>Gender</label>
              <select 
                className='form-control' 
                value={gender} 
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" disabled>Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Sixer">Sixer</option>
                <option value="Querr">Querr</option>
                <option value="God Knows">God Knows</option>
              </select>
            </div>

            <div className='mb-3'>
              <label className='form-label'>Personal Phone Number</label>
              <input type="number" className='form-control'
              value={per_phn}
              onChange={(e) =>setPer_phn(e.target.value)}/>              
            </div>
            <div className='mb-3'>
              <label className='form-label'>Emergency Phone Number 1</label>
              <input type="number" className='form-control'
              value={emer_phn1}
              onChange={(e) =>setEmer_phn1(e.target.value)}/>              
            </div>

            <div className='mb-3'>
              <label className='form-label'>Emergency Phone Number 2</label>
              <input type="number" className='form-control'
              value={emer_phn2}
              onChange={(e) =>setEmer_phn2(e.target.value)}/>              
            </div>

            <div className='mb-3'>
              <label className='form-label'>Current Address</label>
              <input type="text" className='form-control'
              value={curr_add}
              onChange={(e) =>setCurr_add(e.target.value)}/>              
            </div>

            <div className='mb-3'>
              <label className='form-label'>Adhar number</label>
              <input type="number" className='form-control'
              value={adh}
              onChange={(e) =>setAdh(e.target.value)}/>              
            </div>
            
            <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input type="password" className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div><button type='submit' className='btn btn-success'>Submit</button>
          
</form>
      
    </div>
  )
}
export default Forms;

