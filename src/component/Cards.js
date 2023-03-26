


import React from 'react'
import Dataspl from './Dataspl';
import "./Cards.css"

const Cards = () => {
  return (
    <>
    <div className='spldata'>
      {
        Dataspl.map((v)=>{
          return(
            <>
              <div className='main-style' style={{
                   width: '15rem', height: '22rem', borderRadius: '20px ',
                   background: '#FFFFFF',

                    }}>
                   <div className='cardstyle'
                     style={{
                       width: '100%', height: '70%', background: '#AED3E2',
                       borderRadius: '20px 20px 0px 0px'
                     }} />
                   <div className="Card-Body" style={{marginTop:'1rem'}}>
                     <h5 style={{
                      fontfamily: 'Source Sans Pro',
                      fontstyle: 'normal',
                      fontweight: '700',
                      fontsize: '24px',
                      lineheight: '30px',
                      
                      color: '#002348'
                     }}>{v.title}</h5>

                     <p style={{
                      fontfamily: 'Source Sans Pro',
                      fontstyle: 'normal',
                      fontweight: '400',
                      fontsize: '18px',
                      lineheight: '23px',                  
                      
                      color:' #002348'
                     }}>{v.category}</p>
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

export default Cards