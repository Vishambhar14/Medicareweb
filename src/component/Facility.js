import React from 'react'


import "./Facility.css"


const Facility = () => {
  return (
    <div className='facility_container'>
        <div className="clinic">
            <h1>Clinic with Innovative</h1>
            <p>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
            <button className='clinic_button'>Learn More</button>
        </div>
        <div className="facility">
        <div className="facility_box">
                <img src="./Image/doctor-woman.png" alt="" />
                <h2>Qualified Doctors</h2>
            </div>
            <div className="facility_box">
                <img src="./Image/doctor-woman copy.png"  alt="" />
                <h2>Emergency Care</h2>
            </div>
            <div className="facility_box">
                <img src="./Image/doctor-woman copy 2.png" alt="" />
                <h2>24 hours Services</h2>
            </div>
        </div>
           
    </div>
  )
}

export default Facility