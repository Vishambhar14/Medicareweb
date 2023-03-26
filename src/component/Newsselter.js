import React from 'react'
import "./Newselter.css"

const Newsselter = () => {
  return (
    <>
      <section className='newselter'>
        <div className="news-text" >
          <h1 >Subscribe to Newselter</h1>
          <p >We have a wide experience  inexperience design and strategy,</p>
           <div className="news-search">
          <input type="text" placeholder='Enter your email address' />
          <button style={{color:'white',padding:'0.6rem 1.5rem',
          background: '#007FF4',borderRadius:'2rem'}}>Send Now</button>
        </div>
        </div>
       
      </section>
    </>
  )
}

export default Newsselter