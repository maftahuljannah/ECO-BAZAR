import React from 'react'
import Banner from '../components/Banner/Banner'
import PaymentCard from '../components/PaymentCard'
import Featured from '../components/Featured/Featured'
import ProductGrid from '../components/Featured/ProductGrid'
import Categories from '../components/categories/Categories'
import OrganicFood from '../components/organicFood/OrganicFood'
import Counter from '../components/Counter'
import Sales from '../components/Sales'


const Homepage = () => {
  return (
    <>
     <Banner/> 
     <PaymentCard/>
     <ProductGrid/>
     <Featured limit={4}/>
     <Categories/>
     <OrganicFood/>
     <Counter/>
     <Sales/>
    </>
  )
}

export default Homepage
