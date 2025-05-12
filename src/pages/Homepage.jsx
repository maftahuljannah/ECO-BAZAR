import React from 'react'
import Banner from '../components/Banner/Banner'
import PaymentCard from '../components/PaymentCard'
import Featured from '../components/Featured/Featured'
import ProductGrid from '../components/Featured/ProductGrid'
import Categories from '../components/categories/Categories'

const Homepage = () => {
  return (
    <>
     <Banner/> 
     <PaymentCard/>
     <ProductGrid/>
     <Featured limit={4}/>
     <Categories/>
    </>
  )
}

export default Homepage
