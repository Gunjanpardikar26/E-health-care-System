import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Personal_Details from './Personal_Details/Personal_Details';
// import Doc_Login from './Doctors_Login/Doc_Login';
import User_Login from './User_Login_Signup/User_Login';
import New_User from './User_Login_Signup/New_User';
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
      <Route path="/" element={<User_Login />} />
      <Route path='/new-user' element = {<New_User/>} />
      </Routes>
    </Router>
  );
}

export default App;
