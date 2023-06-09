import React from 'react'
import './Footer.css'
import Call from '../img/call-1-300x300.png'
import TeleLogo from '../img/telelogo.png'
const Footer = () => {
  return (
    <footer className='main-d'>
        <div className='height'></div>
   <div className='d-flex flex-row flex-wrap p-2 justify-content-evenly'>
 

    <div className='wdth'>
    <h3 className='margin-adjust color-adjust givebackground'>Lectureb@sket</h3>
      <p>
    Lecturebasket is the an Education e-commerce portal in India, dedicated to help students in identifying the best coaching material and online virtual classes across India for CA/CS and CMA </p>
    </div>

    <div>
    
      <h3 className='margin-adjust color-adjust'>Reach us</h3>
      <div className='d-flex'>
     <img  src={Call} className='w-18'/>
     <div>
      <p className='cnt-text'> 9520257467</p>
      <p className='cnt-text'> 9998740148</p>
      <p className='cnt-text'>9313651038</p>
      </div>
      </div>

      <div className='d-flex'>
     <img  src={TeleLogo} className='w-18'/>
     <div>
     <a href='https://t.me/lecturebasket' className='cnt-text nolink'>Contact on Telegram</a>
      </div>
      </div>
    </div>

    
    



   </div>
    </footer>
  )
}

export default Footer