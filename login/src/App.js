import { BrowserRouter as Router, Route, Routes, Form } from 'react-router-dom';
import Personal_Details from './Personal_Details/Personal_Details';
import Doc_Login from './Doctors_Login/Doc_Login';
import User_Login from './User_Login_Signup/User_Login';
import New_User from './User_Login_Signup/New_User';
import Home from './Home_Page/Home';
import Forms from './Personal_details_form/Forms1';
import New_Doc from './Doctors_Login/New_Doc';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
  // return (
  //   <div >
  //     {/* <LoginSignup/> */}
  //     <Personal_Details/>
  //   </div>
  // );
    /*const[users,  setUsers] = useState([]);
    useEffect(()=>{
      axios.get('https://localhost:4000/getUsers')
      .then(users => setUsers(users.data))
      .catch(err => console.log(err));
    }, []) */
  return (
    <Router>
      <Routes>
      <Route path="/personal-details" element={<Personal_Details />} />
      <Route path="/login-user" element={<User_Login />} />
      <Route path='/new-user' element = {<Forms/>} />
      <Route path='/login-doc' element = {<Doc_Login/>} />
      <Route path='/new-doc' element = {<New_Doc/>} />
      <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
