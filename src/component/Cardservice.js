 
  import React from 'react'
  import {IoIosArrowForward} from  'react-icons/io'
   import Sdata from './Sdata'
   import "./Cardstyle.css"
   
   const Cardservice = () => {
     return (
      <>
      
        <div className="cart">
         {
           Sdata.map((item) => {
             return (
               <>
                 <div className=' card1'>
                   <img src={item.imgsrc} alt="" />
                   <h5>{item.title}</h5>
                   <div className="service-icon">
                      <p>{item.study}</p>
                   
                        <h3 ><IoIosArrowForward/></h3>
                   </div>
                 </div>
               </>
             )
           })
         }
         </div>
      </>
     )
   }
   
   export default Cardservice