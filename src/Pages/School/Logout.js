import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setLogout } from '../../Redux/Slices/UserAuthSlice';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setLogout());
    navigate('/'); // Redirect the user to the desired page (e.g., home page)
  }, [dispatch, navigate]);

  return null; // or render any component you prefer, or leave it as null
}

export default Logout;
