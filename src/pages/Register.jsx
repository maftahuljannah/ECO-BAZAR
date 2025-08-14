import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, setPersistence, browserSessionPersistence } from "firebase/auth";
import { auth, googleProvider } from "../Firebase";
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../slicer/UserSlice';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Register with email & password
  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const res = userCredential.user;
        const user = {
          id: res.uid,
          photo: res.photoURL || '',
          email: res.email,
          name: res.displayName || '',
          phone: res.phoneNumber || '',
        };
        dispatch(setAuthUser(user));
        navigate("/profile");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // ✅ Login with Google
  const loginWithGoogle = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithPopup(auth, googleProvider);
      })
      .then((result) => {
        const res = result.user;
        const user = {
          id: res.uid,
          photo: res.photoURL || '',
          email: res.email,
          name: res.displayName || '',
          phone: res.phoneNumber || '',
        };
        dispatch(setAuthUser(user));
        navigate("/profile");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='max-w-[580px] w-full p-6 shadow-sm rounded border border-gray-200 mx-auto mt-20 mb-[100px]'>
      <h2 className='text-center text-3xl font-bold'>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          onChange={e => setEmail(e.target.value)}
          type='email'
          className='border border-gray-300 w-full block mt-5 h-[50px] rounded pl-[8px]'
          placeholder='Email'
        />
        <input
          onChange={e => setPassword(e.target.value)}
          type='password'
          className='border border-gray-300 w-full block mt-5 h-[50px] rounded pl-[8px]'
          placeholder='Password'
        />
        <button type='submit' className='btn w-full justify-center mt-5'>Register</button>

        <Link to='/login' className='text-center text-branding-success block text-sm mt-3'>
          Already signed up? Login
        </Link>

        <div className='flex gap-4 items-center justify-center'>
          <button
            type='button'
            onClick={loginWithGoogle}
            className='flex items-center justify-center gap-2 border border-gray-300 p-4 mt-5'
          >
            Login with Google
            <img width='30px' src='/images/googleimage.png' alt='Google' />
          </button>

          <button
            type='button'
            className='flex items-center justify-center gap-2 border border-gray-300 p-4 mt-5'
          >
            Login with Facebook
            <img width='45px' src='/images/Facebook-logo.png' alt='Facebook' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
