import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainHeader from '../components/Header/MainHeader';
import ShopHeader from '../components/Header/ShopHeader'; // shop এর জন্য আলাদা header
import TopHeader from '../components/Header/TopHeader';
import Footer from '../components/Footer/Footer';

const FrontendLayout = () => {
  const location = useLocation();

  // যদি URL "/shop" দিয়ে শুরু হয়
  const isShopPage = location.pathname.startsWith('/shop');

  return (
    <>
      <header>
        <TopHeader />
        {isShopPage ? <ShopHeader /> : <MainHeader />}
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default FrontendLayout;
