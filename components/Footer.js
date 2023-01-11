import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";





function Footer() {
  return (<div className='foot'>
    <div className='footer-top-img'></div>
    <div className='footer-container'>
        
        <div className='footer-text'>
            <div className='footer-passus'>
                <p>MILOŠEVIĆ DENTAL</p>
                <p>DUŠANA VUKASOVIĆA 122</p>
                <p>NOVI BEOGRAD</p>
            </div>
            <div className='footer-number'> 
            <a href="tel:00381606788761">+381/60-678-87-61</a>
            </div>
        </div>
        <div className='footer-icon'>
            <div className='footer-a'><a href="https://www.instagram.com/milosevicdental/" target="_blank"><BsInstagram /></a></div>
            <div className='footer-a'><a href="https://www.google.com/maps/place/Dental+Milo%C5%A1evi%C4%87/@44.8040678,20.3719257,17z/data=!3m1!4b1!4m5!3m4!1s0x475a6f6d9f252789:0xe393080b9bd35620!8m2!3d44.8040678!4d20.3741144?hl=sr" target="_blank"><AiFillEnvironment /></a></div>
            
        </div>
    </div>
    </div>
  )
}

export default Footer