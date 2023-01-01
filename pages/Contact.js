import React from 'react'
import ContactImage from '../components/contact/ContactImage'

import ContactLast from '../components/contact/ContactLast'
import ContactPrice from '../components/contact/ContactPrice'

function Contact() {
  return (
    <div>
        <ContactImage />
        <ContactPrice />
        <ContactLast />
    </div>
  )
}

export default Contact