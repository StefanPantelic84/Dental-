import React from 'react'
import DiffOne from '../components/difference/DiffOne'
import DiffTwo from '../components/difference/DiffTwo'
import DiffDark from '../components/difference/DiffDark.js'
import DiffThree from '../components/difference/DiffThree.js'
import DiffFour from '../components/difference/DiffFour.js'
import DiffImage from '../components/difference/DiffImage'
import Head from 'next/head'


function O_nama() {
  
  return (
    <div>
      <Head>  <title>Milosevic/Dental</title>
        <meta property="og:title" content="Dental Milošević" />
        <meta property="og:description" content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu. " />
        <meta property="og:image" content="https://milosevicdental.com/_next/static/media/diffCover.70e05811.webp" />   
        <meta name="google" content="notranslate" />
        <meta name="description" content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu." />
  </Head>
      <DiffImage />
        <DiffOne />
        <DiffTwo />
        <DiffDark />
        <DiffThree />
        <DiffFour />   
    </div>
  )
}

export default O_nama