import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../axios';

export default function EditCoffee(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const edittingCoffee = props.coffees.filter((coffee) => id == coffee.id);
  const [editCoffees, setEditCoffees] = useState(edittingCoffee[0]);

  const handleCoffees = (e) => {
    setEditCoffees({
      ...editCoffees,
      [e.target.name]: e.target.value,
    });
  };

  const submitCoffees = (e) => {
    e.preventDefault();

    axiosInstance
      .put(
        `https://web-production-220b.up.railway.app/api/coffees/${id}`,
        editCoffees
      )
      .then((res) => {
        console.log(res.data);
        navigate('/');
        window.location.reload();
      });
  };

  const deleteCoffee = (e) => {
    e.preventDefault();

    axiosInstance
      .delete(`https://web-production-220b.up.railway.app/api/coffees/${id}`)
      .then((res) => {
        console.log(res.data);
        const updated = props.coffees.filter((coffee) => id !== coffee.id);
        props.setCoffees(updated);
        navigate('/');
        window.location.reload();
      });
  };

  return (
    <div class='min-h-screen flex flex-col'>
      <div class='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div class='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <h1 class='mb-8 text-3xl text-center'>Edit Coffee</h1>
          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='name'
            defaultValue={edittingCoffee[0].name}
            onChange={handleCoffees}
          />

          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='roast'
            placeholder='Roast'
            defaultValue={edittingCoffee[0].roast}
            onChange={handleCoffees}
          />

          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='origin'
            placeholder='Origin'
            defaultValue={edittingCoffee[0].origin}
            onChange={handleCoffees}
          />
          <textarea
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4 h-40 text-justify'
            name='notes'
            placeholder='Notes'
            defaultValue={edittingCoffee[0].notes}
            onChange={handleCoffees}
          />
          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='brew_method'
            placeholder='Brew Method'
            defaultValue={edittingCoffee[0].brew_method}
            onChange={handleCoffees}
          />
          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='image'
            placeholder='Image URL'
            defaultValue={edittingCoffee[0].image}
            onChange={handleCoffees}
          />

          <button
            type='submit'
            class='w-full text-center py-3 rounded bg-black text-white focus:outline-none my-1'
            onClick={submitCoffees}
          >
            Edit
          </button>
          <button
            type='submit'
            class='w-full text-center py-3 rounded bg-black text-white focus:outline-none my-1'
            onClick={deleteCoffee}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
