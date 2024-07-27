import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const handleDoc = () => {
        navigate('login-doc');
    }

    const handleUser = () => {
        navigate('login-user');
    }
  return (
    <>
    <div>
        <button onClick={handleDoc} >This button is for the Doctor Login</button>
    </div>
    <div>
        <button onClick={handleUser} >This button is for the User Login</button>
    </div>
    </>
  )
}

export default Home
