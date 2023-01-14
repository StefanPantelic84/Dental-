import React from 'react'
import AfterImage from '../components/after/AfterImage'
import AfterSlide from '../components/after/AfterSlide'
import Head from 'next/head'

function After() {
  return (
    <div>
       <Head>  <title>Milosevic/Dental</title>
        <meta property="og:title" content="Osmeh pre i posle!" />
        <meta property="og:description" content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu. " />
        <meta property="og:image" content="https://weblala.online/_next/static/media/C1.c8c99434.jpg" />   
        <meta name="google" content="notranslate" />
  </Head>
        <AfterImage />
        <AfterSlide />
    </div>
  )
}

export default After