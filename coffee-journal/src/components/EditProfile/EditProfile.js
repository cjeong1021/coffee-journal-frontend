import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axios';

export default function EditProfile({ profile, user }) {
  const navigate = useNavigate();
  const [editProfile, setEditProfile] = useState({
    name: profile[0].name,
    fav_roast: profile[0].fav_roast,
    brew_method: profile[0].brew_method,
  });

  const handleProfile = (e) => {
    setEditProfile({
      ...editProfile,
      [e.target.name]: e.target.value,
    });
  };

  const submitProfile = (e) => {
    e.preventDefault();

    axiosInstance
      .post(
        `https://rocky-river-96433.herokuapp.com/api/profiles/${user}`,
        editProfile,
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem('access_token')}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate('/');
      });
  };
  return (
    <div class='min-h-screen flex flex-col'>
      <div class='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div class='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <h1 class='mb-8 text-3xl text-center'>Profile</h1>
          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='name'
            placeholder='Name'
            defaultValue={editProfile.name}
            onChange={handleProfile}
          />
          <select
            name='fav_roast'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            onChange={handleProfile}
          >
            <option value='dark'>Dark</option>
            <option value='medium'>Medium</option>
            <option value='light'>Light</option>
          </select>
          <input
            type='text'
            class='block border border-grey-light w-full p-3 rounded mb-4'
            name='brew_method'
            placeholder='Favorite Brew Method'
            defaultValue={editProfile.brew_method}
            onChange={handleProfile}
          />
          <button
            type='submit'
            class='w-full text-center py-3 rounded bg-black text-white focus:outline-none my-1'
            onClick={submitProfile}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
