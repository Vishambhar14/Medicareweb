import React from 'react'
import Cardservice from './Cardservice'
import "./Service.css"

const Services = () => {
  return (
   <>
   <section className='service'>
    <div className="service-text">
        <h1>Our Services</h1>
        <p>We provide the most full medical services,so every person could</p>
        <p>heave the oppurtinityto receive qualitative medical help</p>

    </div>
    <Cardservice />
   </section>
   </>
  )
}

export default Services