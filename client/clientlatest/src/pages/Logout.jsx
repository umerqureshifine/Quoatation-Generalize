import React from 'react'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/UserSlice';
import {  useNavigate } from 'react-router-dom';


function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  
  const handleLogout = () => {
    // Dispatch the logout action
    window.confirm('Are You Sure Logout')
    dispatch(logoutUser());
    // Redirect the user to the login page
    
    navigate('/');
  };
  return (
  
    <button className='btn btn-success' onClick={handleLogout}>Logout</button>
  )
}

export default Logout