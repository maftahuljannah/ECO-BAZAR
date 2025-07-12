import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // ✅ use 'react-router-dom'
import { signOut } from "firebase/auth";        // ✅ import this
import { auth } from "../Firebase";
import { removeAuthUser } from '../slicer/UserSlice';

const Profile = () => {
  const authUser = useSelector(state => state.user);
  const dispatch = useDispatch(); // ✅ fixed
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeAuthUser()); // ✅ fix here
        navigate('/login');
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

useEffect(()=>{
  if(!authUser){
    navigate("/login");
  }
},[])


  return (
    <div className='container'>
      {authUser?.photo && <img src={authUser.photo} alt="User" />}
      <h2 className='text-center text-xl mt-20'>
        Welcome to Ecobazar {authUser.name ?? authUser.email}
      </h2>
      <button onClick={handleSignOut} className='block text-center w-full mt-5'>
        Sign Out
      </button>
    </div>
  );
};

export default Profile;

