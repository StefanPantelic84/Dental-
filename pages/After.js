import React from 'react'
import Navigation from '../components/Navigation'
import Connect from '../components/Connect'
import Footer from '../components/Footer'
import AfterImage from '../components/after/AfterImage'
import AfterSlide from '../components/after/AfterSlide'

function After() {
  return (
    <div>
        <Navigation />
        <AfterImage />
        <AfterSlide />
        <Connect />
        <Footer />
    </div>
  )
}

export default After