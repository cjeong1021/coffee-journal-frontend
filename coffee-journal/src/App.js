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
import EditCoffee from './components/Editcoffee/Editcoffee';
import axiosInstance from './components/axios';
import EditProfile from './components/EditProfile/EditProfile';
import AddProfile from './components/AddProfile/AddProfile';

function App() {
  const [coffees, setCoffees] = useState([]);
  const [profile, setProfile] = useState([]);

  const [login, setLogin] = useState(false);

  useEffect(() => {
    setLogin(JSON.parse(window.sessionStorage.getItem('login')));
  }, []);

  const getData = () => {
    axiosInstance
      .get('http://localhost:8000/api/coffees/')
      .then((res) => {
        console.log(res.data);
        setCoffees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProfile = () => {
    axiosInstance
      .get('http://localhost:8000/api/profiles/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('access_token')}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(getData, []);
  return (
    <div className='App'>
      <Navbar login={login} />
      <main>
        <Routes>
          <Route path='' element={<Home coffees={coffees} />} />
          <Route path='/profile' element={<Profile profile={profile} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login setLogin={setLogin} />} />
          <Route
            path='/add'
            element={<Addcoffee coffees={coffees} setCoffees={setCoffees} />}
          />
          <Route path='/logout' element={<Logout setLogin={setLogin} />} />
          <Route
            path='/:id'
            element={
              <EditCoffee
                getData={getData}
                coffees={coffees}
                setCoffees={setCoffees}
              />
            }
          />
          <Route path='/editprofile/:id' element={<EditProfile />} />
          <Route path='/addprofile' element={<AddProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
