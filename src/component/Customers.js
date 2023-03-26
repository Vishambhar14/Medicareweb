import React from 'react'
import Customercard from './Customercard'
import "./Customer.css"

const Customers = () => {
  return (
    <>
    <section className='customer-main'>
        <div className="customer-text" >
         <h1 >What Our Customers Say</h1>
        </div>
        <Customercard/>
    </section>
    </>
  )
}

export default Customers