import React, { useEffect } from 'react';
import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontendLayout from './layouts/FrontendLayout';
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import CategoryTypes from './pages/CategoryTypes';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { useDispatch } from 'react-redux';
import { setAuthUser } from './slicer/UserSlice';
import WishList from './components/WishList.jsx';
import Scart from './components/Scart.jsx';
import CheckOut from './components/CheckOut.jsx';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const authUser = {
          id: user.uid,
          photo: user.photoURL || '',
          email: user.email,
          name: user.displayName || '',
          phone: user.phoneNumber || '',
        };
        dispatch(setAuthUser(authUser));
      } else {
        dispatch(setAuthUser(null)); // clear user
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FrontendLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/scart" element={<Scart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<WishList />} />
           <Route path="/checkout" element={<CheckOut />} />
          <Route path="/categorytype/:name" element={<CategoryTypes />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
