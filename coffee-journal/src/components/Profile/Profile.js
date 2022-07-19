import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../axios';
import AddProfile from '../EditProfile/EditProfile';

export default function Profile(props) {
  return (
    <div>
      {props.profile[0].name === undefined ? (
        <div>
          <p>{props.profile[0].name}</p>
          <p>{props.profile[0].fav_roast}</p>
          <p>{props.profile[0].brew_method}</p>
        </div>
      ) : (
        <AddProfile />
      )}
    </div>
  );
}
