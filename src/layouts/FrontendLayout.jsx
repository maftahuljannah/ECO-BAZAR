import React from 'react'
import { Outlet } from 'react-router';
import MainHeader from '../components/Header/MainHeader';
import TopHeader from '../components/Header/TopHeader';
import Footer from '../components/Footer/Footer';

const FrontendLayout = () => {
  return (
    <>
    <header>
      <TopHeader/>
      <MainHeader/>
    </header>  
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default FrontendLayout
