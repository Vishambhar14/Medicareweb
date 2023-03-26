import React from 'react'
import { Link ,Outlet} from 'react-router-dom'
import Customerdata from './Customerdata'
import "./Customerdata.css"

const Customercard = () => {
  return (
    <>
      <section className='customer'>
     
        {
            Customerdata.map((v)=>{
             
                return(
                    <>
                     <div className="customer-card">
                     
                        
        <p>{v.title}</p>
   
        <div className="about-img">
            <img src={v.img} alt="" />
            <div className="about-name">
                <h4>{v.name}</h4>
                <p>{v.category}</p>
            </div>
        </div>
        <Link to="/review"> <div className="topside">
                <h6>"</h6>
              </div></Link>
        </div>
      
                    </>
                )
            })
        }
       </section>
       <Outlet/>
    </>
  )
}

export default Customercard