import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axiosInstance from '../axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = ({ setLogin }) => {
  const navigate = useNavigate();
  const signinForm = Object.freeze({
    email: '',
    password: '',
  });

  const [formData, setFormData] = useState(signinForm);

  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post('token/', {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem('access_token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        axiosInstance.defaults.headers['Authorization'] =
          'JWT' + localStorage.getItem('access_token');
        navigate('/');
        window.location.reload();
        console.log(res);
        setLogin(true);
      });
  };

  return (
    <div class='min-h-screen flex flex-col'>
      <div class='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div class='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <h1 class='mb-8 text-3xl text-center'>Log In</h1>

          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='email'
            placeholder='Email'
            onChange={handleForm}
          />

          <input
            type='password'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='password'
            placeholder='Password'
            onChange={handleForm}
          />

          <button
            type='submit'
            class='w-full text-center py-3 rounded bg-black text-white focus:outline-none my-1'
            onClick={handleSubmit}
          >
            Log In
          </button>
        </div>
        <div class='text-grey-dark mt-6'>
          Don't have an account?
          <a
            class='no-underline border-b border-blue text-blue'
            href='../signup/'
          >
            <span> </span>Sign up
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Login;
