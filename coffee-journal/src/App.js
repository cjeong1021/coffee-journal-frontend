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

  const [login, setLogin] = useState(false);

  const getData = () => {
    axios
      .get('http://localhost:8000/coffees/')
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
      <Navbar login={login} />
      <main>
        <Routes>
          <Route path='' element={<Home coffees={coffees} />} />
          fi
          <Route path='/profile' element={<Profile />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login setLogin={setLogin} />} />
          <Route
            path='/add'
            element={<Addcoffee coffees={coffees} setCoffees={setCoffees} />}
          />
          <Route path='/logout' element={<Logout setLogin={setLogin} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
