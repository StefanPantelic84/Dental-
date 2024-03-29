import React from 'react'
import AfterImage from '../components/after/AfterImage'
import AfterSlide from '../components/after/AfterSlide'
import Head from 'next/head'

function Zubi_pre_i_posle() {
  return (
    <div>
       <Head>  <title>Milosevic/Dental</title>
        <meta property="og:title" content="Osmeh pre i posle!" />
        <meta property="og:description" content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu. " />
        <meta property="og:image" content="https://milosevicdental.com/_next/static/media/C1.c8c99434.webp" />   
        <meta name="google" content="notranslate" />
        <meta name="description" content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu." />
  </Head>
        <AfterImage />
        <AfterSlide />
    </div>
  )
}

export default Zubi_pre_i_posle