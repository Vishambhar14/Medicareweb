import React from 'react'
import Customers from './Customers'
import Facility from './Facility'
import Footer from './Footer'
import Footer2 from './footer2'
import Header from './Header'
import Newsselter from './Newsselter'
import Services from './Services'
import Specialist from './Specialist'
// import "./Home.css"

const Home = () => {

  return (
  <>
  
  <div className="conatiner1" style={{ background:' #F8FDFF'}}>
    
    <Header/>
    <Services/>
    </div>
    <Facility/>
    <div className="conatiner" style={{ background:' #F8FDFF'}}>
    <Specialist/>
   
   
    <Customers/>
   
    <Newsselter/>
    <Footer/>
   </div>
  <Footer2/>
   
    </>
  )
}

export default Home