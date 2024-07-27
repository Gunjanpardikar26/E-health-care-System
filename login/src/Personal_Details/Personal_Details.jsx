export default Personal_Details
import React from 'react';
import './Personal_Details.css';

function Personal_Details() {
  const details = {
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
  };

  return (
    <div className="App">
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
    </div>
  );
}

