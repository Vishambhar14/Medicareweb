
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./Review.css"

const Review = () => {
    const[user,setuser]=useState([])
    let faqtchapi=async()=>{
      let res=await axios.get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      let result=await res.data;
      console.log(result.data)
      setuser(result.data)
    }
    useEffect(()=>{
      faqtchapi();
    },[])
  return (
    <>
    <div style={{background:'#F8FDFF'}}>
    <div className="review-section">
    <h1>Cusromer Review</h1>
    
     <Link to="/home"> <button>Home</button></Link>
      </div>
      <section className='review' >
     
     {
         user.map((v)=>{
          
             return(
                 <>
                  <div className="review-card">         
     <h3>{v.Name}</h3>
     <h4>{v.Company}</h4>
     <p>{v.Reviews}</p>
    
     
     
     </div>
   
                 </>
             )
         })
     }
    </section>
    </div>
    </>
  )
}

export default Review