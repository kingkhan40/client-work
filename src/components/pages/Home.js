import React from 'react'
import About from '../Extra/About';
import Services from '../Extra/Services';
import Destination from '../Extra/Destination';
import Testemonial from '../testmonial/Testemonial';
import Review from '../Extra/Review';
import Contact from '../Extra/Contact';
import TechStack from '../Extra/TechStack';
import Portfolio from '../Extra/Portfolio';
import Carousel from '../Extra/Carousel';
const Home = () => {
  return (
    < >
         <About/>
       
         <hr />
        <Services/> 
         <hr />
        <Destination/>
       <hr />
        <Review/>
        <hr />
        <Carousel/>
        
        <hr />
        <Portfolio/>
        <hr />
        <Testemonial/>
        <hr />
        <TechStack/>
        <hr /> 
        <Contact/>
       
        
    </>
  )
}

export default Home;