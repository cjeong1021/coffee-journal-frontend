import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Addcoffee from './components/Addcoffee/Addcoffee';
import Logout from './components/Logout/Logout';

function App() {
  const [coffees, setCoffees] = useState([]);
  const [addCoffees, setAddCoffees] = useState({
    name: '',
    roast: '',
    origin: '',
    notes: '',
  });
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [signup, setSignup] = useState({
    fullname: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const handleCoffees = (e) => {
    setAddCoffees({
      ...addCoffees,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  const getData = () => {
    axios
      .get('http://localhost:8001/coffees/')
      .then((res) => {
        console.log(res.data);
        setCoffees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getData, []);
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Routes>
          <Route path='' element={<Home coffees={coffees} />} />
          <Route path='/profile' element={<Profile />} />
          <Route
            path='/signup'
            element={<Signup handleSignup={handleSignup} />}
          />
          <Route path='/login' element={<Login handleLogin={handleLogin} />} />
          <Route
            path='/add'
            element={<Addcoffee handleCoffees={handleCoffees} />}
          />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
