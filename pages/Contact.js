import React from 'react'
import ContactImage from '../components/contact/ContactImage'
import Navigation from '../components/Navigation'
import Connect from '../components/Connect'
import Footer from '../components/Footer'
import ContactLast from '../components/contact/ContactLast'

function Contact() {
  return (
    <div>
        <Navigation />
        <ContactImage />
        <ContactLast />
        <Connect />
        <Footer />
    </div>
  )
}

export default Contact