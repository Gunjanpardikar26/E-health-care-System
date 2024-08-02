import React from 'react';
import './Personal_Details.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function Personal_Details() {
  /*const details = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    permanentAddress: '123 Main St, Springfield, USA',
    temporaryAddress: '456 Elm St, Springfield, USA',
    height: '6 feet',
    weight: '180 lbs',
    bloodGroup: 'O+',
    insuranceNumber: 'INS-12345',
    adharNumber: '1234-5678-9012',
  };*/
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:4000/getUsers')
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      } )
      .catch(error => console.error('Error fetching users:', error));
      
  }, []);
  useEffect(() => {
  const fetchUserDetails = async () => {
    try {
      // const userId = localStorage.getItem('UserId'); // Retrieve the Aadhar number
      const storedUser = JSON.parse(localStorage.getItem('User'));
      if (storedUser && storedUser.adh) {
        const response = await axios.get(`http://localhost:4000/api/user/${storedUser.adh}`);
        setUser(response.data);
      } else {
        console.error('No user ID found in storage');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  fetchUserDetails();
}, []);
// if (!user) return <div>Loading...</div>;
  return (
    
    /*<div className="App">
      <h1>Personal Details</h1>
      <div className="details">
        <p><strong>Name:</strong> {details.name}</p>
        <p><strong>Email:</strong> {details.email}</p>
        <p><strong>Phone Number:</strong> {details.phoneNumber}</p>
        <p><strong>Permanent Address:</strong> {details.permanentAddress}</p>
        <p><strong>Temporary Address:</strong> {details.temporaryAddress}</p>
        <p><strong>Height:</strong> {details.height}</p>
        <p><strong>Weight:</strong> {details.weight}</p>
        <p><strong>Blood Group:</strong> {details.bloodGroup}</p>
        <p><strong>Insurance Number:</strong> {details.insuranceNumber}</p>
        <p><strong>Adhar Number:</strong> {details.adharNumber}</p>
      </div>
    </div>*/

    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <div className="w-50">
      <table className="table">
      <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Personal Phone Number</th>
              <th>Current Address</th>
              <th>Adhar Number</th>
              <th>Emergency Phone Number 1</th>
              <th>Emergency Phone Number 2</th>
            </tr>
          </thead>
        <tbody>
            {users.length > 0 ? (
              users.map(user => (
                <tr key={user._id}>
                  <td>{user.fname} {user.mname} {user.lname}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{new Date(user.dob).toLocaleDateString()}</td>
                  <td>{user.gender}</td>
                  <td>{user.per_phn}</td>
                  <td>{user.curr_add}</td>
                  <td>{user.adh}</td>
                  <td>{user.emer_phn1}</td>
                  <td>{user.emer_phn2}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10">No users found</td>
              </tr>
            )
          }
        </tbody>
      </table>
      </div>
    </div>
    
  );
}

export default Personal_Details;