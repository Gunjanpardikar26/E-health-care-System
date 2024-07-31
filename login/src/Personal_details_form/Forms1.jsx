import React, { useState } from 'react'
import './Forms.css'

function Forms() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const collectData = async(e) =>{
      e.preventDefault();
      
      try {
        let result = await fetch('http://localhost:4000/api/register', {
          method: 'POST',
          body: JSON.stringify({name, email, password}),
          headers: {
            'Content-Type': 'application/json',
          },
          
        });
    
        if (!result.ok) {
          throw new Error('Network response was not ok');
        }
        
        result = await result.json(); // Corrected the response parsing
        localStorage.setItem("User", JSON.stringify(result));
        
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
  return (
    <div className="container">
        <form onSubmit={collectData}>
          
            <h2 className='text-center pt-3'>SIGNUP FORM</h2> 
            <div className='mb-3'>
              <label className='form-label'>Username</label>
              <input type="text" className='form-control'
              value={name}
              onChange={(e) =>setName(e.target.value)}/>              
            </div>

            <div className='mb-3'>
              <label className='form-label'>Email</label>
              <input type="email" className='form-control'
              value={email}
              onChange={(e) =>setEmail(e.target.value)}/>
            </div>

            <div className='mb-3'>
              <label className='form-label'>Password</label>
              <input type="password" className='form-control'
              value={password}
              onChange={(e) =>setPassword(e.target.value)}/>
            </div>
            <button type='submit' className='btn btn-success'>Submit</button>
        </form>
      
    </div>
  )
}
export default Forms;

