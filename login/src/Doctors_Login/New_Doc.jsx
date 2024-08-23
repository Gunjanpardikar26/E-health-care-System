import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function New_Doc() {

  const [dname,setDname] = useState(""); //doctors name
  const [honame,setHoname] = useState(""); //hospital address
  const [por,setPor] = useState(""); //position of responsibility
  const [ho_add,setHo_add] = useState(""); //hospital address
  const [uni_id,setUni_id] = useState(""); //unique doctor address
  const [pass,setPass] = useState(""); //password
  const[per_phn, setPer_phn] = useState(""); //phone number
  const navigate = useNavigate();
  
  const collectData = async(e) =>{
    e.preventDefault();
    
    //write the api's here
    try {
      let result = await fetch('http://localhost:4000/api/register_doc', {
        method: 'POST',
        body: JSON.stringify({
          dname,
          honame,
          por,
          ho_add,
          uni_id,
          pass,
          per_phn,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
  
      if (!result.ok) {
        throw new Error('Network response was not ok');
      }
      
      result = await result.json(); // Corrected the response parsing
      localStorage.setItem("Doc", JSON.stringify(result));
      navigate('/personal-details');
    } catch (error) {
      console.error('Error:', error);
    }

  };
  

    
  return (
    <div className="container1">
        <form onSubmit={collectData}>
          
            <h2 className='text-center pt-3'>DOCTOR'S INFORMATION</h2> 

            <div className='mb-3'>
              <label className='form-label'>Name:</label>
              <input type="text" className='form-control'
              value={dname}
              onChange={(e) =>setDname(e.target.value)}/>              
            </div>

            <div className='mb-3'>
              <label className='form-label'>Name Of Hospital</label>
              <input type="text" className='form-control'
              value={honame}
              onChange={(e) =>setHoname(e.target.value)}/>              
            </div>
            
            <div className='mb-3'> 
              <label className='form-label'>Position Of Responsibility</label>
              <input type="text" className='form-control'
              value={por}
              onChange={(e) =>setPor(e.target.value)}/>              
            </div>

            <div className='mb-3'>
              <label className='form-label'>Hospital Address</label>
              <input type="text" className='form-control'
              value={ho_add}
              onChange={(e) =>setHo_add(e.target.value)}/>              
            </div>        

            <div className='mb-3'>
              <label className='form-label'>Personal Phone Number</label>
              <input type="number" className='form-control'
              value={per_phn}
              onChange={(e) =>setPer_phn(e.target.value)}/>              
            </div>
            <div className='mb-3'>
              <label className='form-label'>Unique ID</label>
              <input type="text" className='form-control'
              value={uni_id}
              onChange={(e) =>setUni_id(e.target.value)}/>              
            </div>

            <div className='mb-3'>
              <label className='form-label'>Password</label>
              <input type="text" className='form-control'
              value={pass}
              onChange={(e) =>setPass(e.target.value)}/>              
            </div>

          <button type='submit' className='btn btn-success'>Submit</button>
          
</form>
      
    </div>
  )
}

export default New_Doc
