import React from 'react'
import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontendLayout from './layouts/FrontendLayout';
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import CategoryTypes from './pages/CategoryTypes';
import SingleProduct from './pages/SingleProduct';

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<FrontendLayout/>}>
<Route path="/" element={<Homepage />} />
<Route path="/shop" element={<Shop />} />
<Route path="/blogs" element={<Blogs />} />
<Route path="/contact" element={<Contact />} />
<Route path="/categorytype/:name" element={<CategoryTypes/>}/>
<Route path="/product/:id" element={<SingleProduct />} />

    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
