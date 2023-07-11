import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axios';

export default function Addcoffee(props) {
  const navigate = useNavigate();
  const [addCoffees, setAddCoffees] = useState({
    name: '',
    roast: '',
    origin: '',
    notes: '',
    brew_method: '',
    image: '',
  });

  const handleCoffees = (e) => {
    setAddCoffees({
      ...addCoffees,
      [e.target.name]: e.target.value,
    });
  };

  const submitCoffees = (e) => {
    e.preventDefault();

    axiosInstance
      .post(
        'https://web-production-192.up.railway.app/api/coffees/',
        addCoffees,
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem('access_token')}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);

        navigate('/');
        window.location.reload();
      });
  };
  return (
    <div class='min-h-screen flex flex-col'>
      <div class='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div class='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <h1 class='mb-8 text-3xl text-center'>Add Coffee</h1>
          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='name'
            placeholder='Name'
            onChange={handleCoffees}
          />

          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='roast'
            placeholder='Roast'
            onChange={handleCoffees}
          />

          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='origin'
            placeholder='Origin'
            onChange={handleCoffees}
          />
          <textarea
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4 h-40 text-justify'
            name='notes'
            placeholder='Notes'
            onChange={handleCoffees}
          />
          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='brew_method'
            placeholder='Brew Method'
            onChange={handleCoffees}
          />
          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='image'
            placeholder='Image URL'
            onChange={handleCoffees}
          />

          <button
            type='submit'
            class='w-full text-center py-3 rounded bg-black text-white focus:outline-none my-1'
            onClick={submitCoffees}
          >
            Add Coffee
          </button>
        </div>
      </div>
    </div>
  );
}
