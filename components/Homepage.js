import React from 'react'
import GreenHome from './GreenHome'
import Testimonials from './Testimonials'


function Homepage() {
  return (
    <div>
    <div className='homepage-container'>
       <div className='homepage-text'>
        <h2>POUZDANA ZUBARSKA ORDINACIJA</h2>
        <h1>Posebna briga zuba za sve uzraste</h1>
        <a href='tel:00381652828678'>ZAKAZI PREGLED</a>
        </div>
    </div>
    <GreenHome />
    <Testimonials />
    </div>
  )
}

export default Homepage