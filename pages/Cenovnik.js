import React from 'react'
import ContactImage from '../components/contact/ContactImage'
import ContactLast from '../components/contact/ContactLast'
import ContactPrice from '../components/contact/ContactPrice'
import Head from 'next/head'

function Cenovnik() {
  return (
    <div>
        <Head>  <title>Milosevic/Dental</title>
        <meta property="og:title" content="Zubar cene." />
        <meta property="og:description" content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu. " />
        <meta property="og:image" content="https://weblala.online/_next/static/media/cc.3b3e0bd4.jpg" />   
        <meta name="google" content="notranslate" />
  </Head>
        <ContactImage />
        <ContactPrice />
        <ContactLast />
    </div>
  )
}

export default Cenovnik