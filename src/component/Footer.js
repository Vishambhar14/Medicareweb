import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer-main'>
          <div className="footer-logo">
            <img src="./Image/MediCare+.png" alt="" />
          </div>

          <div className="footer-list">
            <ul >
              <li> <Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li> <Link to="/service">Service</Link></li>
              <li> <Link to="/news">News</Link></li>
            </ul>


          </div>

        </div>
       


      </footer>

     
      <Outlet />
    </>
  )
}

export default Footer