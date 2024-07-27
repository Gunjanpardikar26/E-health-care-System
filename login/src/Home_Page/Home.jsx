import React from 'react'
import { useNavigate } from 'react-router-dom';
import './home.css';
function Home() {
    const navigate = useNavigate();
    const handleDoc = () => {
        navigate('login-doc');
    }

    const handleUser = () => {
        navigate('login-user');
    }
    return (
        <div className="banner">
            <div className="navbar">
                <img src="/Healthcare.png" className="logo" alt="" />
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Tech-Stack</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contribute</a></li>
                </ul>
            </div>
            <div className="content">
                <h1>E-HEALTH CARE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente,<br /> quam assumenda quas at molestiae magnam odit!</p>
                <div>
                    <button className='bt' onClick={handleDoc} type="button"><span></span>I'm Doctor</button>
                    <button className='bt' onClick={handleUser} type="button"><span></span>I'm Patient</button>
                </div>
            </div>
        </div>
    );
}

export default Home
