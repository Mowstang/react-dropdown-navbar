import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import Design from './pages/Design';
import Services from './pages/Services';
import Development from './pages/Development';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Marketing from './pages/Marketing';
import Consulting from './pages/Consulting';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home/>} ></Route>
        <Route path='/design' exact element={<Design/>} ></Route>
        <Route path='/development' exact element={<Development/>} ></Route>
        <Route path='/services' exact element={<Services/>} ></Route>
        <Route path='/contact-us' exact element={<ContactUs/>} ></Route>
        <Route path='/sign-up' exact element={<SignUp/>} ></Route>
        <Route path='/marketing' exact element={<Marketing/>} ></Route>
        <Route path='/consulting' exact element={<Consulting/>} ></Route>
      </Routes>
    </Router>

  );
}

export default App;
