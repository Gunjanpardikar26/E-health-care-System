import React from 'react';
import './Personal_Details.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Personal_Details() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/getUsers')
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
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

  return (
    <div className="container">
      <div className="w-50">
        {users.length > 0 ? (
          users.map(user => (
            <div key={user._id} className="user-details">
              <p><strong>Name:</strong> {user.fname} {user.mname} {user.lname}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Password:</strong> {user.password}</p>
              <p><strong>Date of Birth:</strong> {new Date(user.dob).toLocaleDateString()}</p>
              <p><strong>Gender:</strong> {user.gender}</p>
              <p><strong>Personal Phone Number:</strong> {user.per_phn}</p>
              <p><strong>Current Address:</strong> {user.curr_add}</p>
              <p><strong>Adhar Number:</strong> {user.adh}</p>
              <p><strong>Emergency Phone Number 1:</strong> {user.emer_phn1}</p>
              <p><strong>Emergency Phone Number 2:</strong> {user.emer_phn2}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}

export default Personal_Details;
