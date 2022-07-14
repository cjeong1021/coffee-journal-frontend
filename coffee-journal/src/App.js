import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [coffees, setCoffees] = useState([]);

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
        </Routes>
      </main>
    </div>
  );
}

export default App;
