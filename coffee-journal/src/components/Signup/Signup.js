import React, { useState } from 'react';
import axiosInstance from '../axios';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const signupForm = Object.freeze({
    email: '',
    username: '',
    password: '',
  });

  const [formData, setFormData] = useState(signupForm);

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
      .post('user/register/', {
        email: formData.email,
        user_name: formData.username,
        password: formData.password,
      })
      .then((res) => {
        navigate('/login');
        console.log(res);
      });
  };
  return (
    <div class='min-h-screen flex flex-col'>
      <div class='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div class='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <h1 class='mb-8 text-3xl text-center'>Sign up</h1>
          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='email'
            placeholder='Email'
            onChange={handleForm}
          />

          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='username'
            placeholder='Username'
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
            Create Account
          </button>
        </div>

        <div class='text-grey-dark mt-6'>
          Already have an account?
          <a
            class='no-underline border-b border-blue text-blue'
            href='../login/'
          >
            <span> </span>Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
}
