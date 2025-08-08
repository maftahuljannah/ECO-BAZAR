import React from 'react'
import Banner from '../components/Banner/Banner'
import PaymentCard from '../components/PaymentCard'
import Featured from '../components/Featured/Featured'
import ProductGrid from '../components/Featured/ProductGrid'
import Categories from '../components/categories/Categories'
import OrganicFood from '../components/organicFood/OrganicFood'
import Counter from '../components/Counter'
import Sales from '../components/Sales'
import BestSeller from '../components/BestSeller'
import PromoSection from '../components/PromoSection'
import News from '../components/News'
import CustomerTestimonials from './../components/CustomerTestimonials';
import ContactFooter from '../components/ContactFooter'



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
     <BestSeller/>
     <PromoSection/>
    <News/>
    <CustomerTestimonials/>
    <ContactFooter/>
    </>
  )
}

export default Homepage
