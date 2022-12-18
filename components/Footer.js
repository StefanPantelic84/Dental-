import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";




function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-top-img'></div>
        <div className='footer-text'>
            <div className='footer-passus'>
                <p>MILOŠEVIĆ DENTAL</p>
                <p>DUŠANA VUKASOVIĆA 122</p>
                <p>NOVI BEOGRAD</p>
            </div>
            <div className='footer-number'> 
            <a href="tel:00381652828678">+381/65-28-28-678</a>
            </div>
        </div>
        <div className='footer-icon'>
            <div className='footer-a'><a href="https://www.instagram.com/" target="_blank"><BsInstagram /></a></div>
            <div className='footer-a'><a href="https://www.facebook.com/" target="_blank"><AiFillFacebook /></a></div>
            
        </div>
    </div>
  )
}

export default Footer