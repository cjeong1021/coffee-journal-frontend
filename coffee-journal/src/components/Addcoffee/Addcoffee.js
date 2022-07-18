import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Addcoffee(props) {
  const navigate = useNavigate();
  const [addCoffees, setAddCoffees] = useState({
    name: '',
    roast: '',
    origin: '',
    notes: '',
    brew_method: '',
  });

  const handleCoffees = (e) => {
    setAddCoffees({
      ...addCoffees,
      [e.target.name]: e.target.value,
    });
  };

  const submitCoffees = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/coffees/', addCoffees, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      })
      .then((res) => {
        console.log(res.data);
        props.setCoffees([...props.coffees, res.data]);
        navigate('/');
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
