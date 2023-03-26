import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaGoogle } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'
import { BiCopyright } from 'react-icons/bi'
import "./footer2.css"

const Footer2 = () => {
  return (
   <>
   <div className="footer2" style={{background:'#ECF4FF'}}>
    <div className="footer-end" >
        <div className="footer-icon" >
          <h2><BsFacebook /></h2>
          <h2><FaGoogle /></h2>
          <h2><GrTwitter /></h2>
        </div>
        <h5><BiCopyright />2020 PodPayment-2020</h5>
      </div>
      </div>
   </>
  )
}

export default Footer2