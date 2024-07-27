// import logo from './logo.svg';
// import './App.css';
// import LoginSignup from './Components/Assets/LoginSignup/LoginSignup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Personal_Details from './Personal_Details/Personal_Details';
import Doc_Login from './Doctors_Login/Doc_Login';
function App() {
  // return (
  //   <div >
  //     {/* <LoginSignup/> */}
  //     <Personal_Details/>
  //   </div>
  // );
  return (
    <Router>
      <Routes>
      <Route path="/personal-details" element={<Personal_Details />} />
      <Route path="/" element={<Doc_Login />} />
      </Routes>
    </Router>
  );
}

export default App;
