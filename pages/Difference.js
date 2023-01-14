import React from 'react'
import DiffOne from '../components/difference/DiffOne'
import DiffTwo from '../components/difference/DiffTwo'
import DiffDark from '../components/difference/DiffDark.js'
import DiffThree from '../components/difference/DiffThree.js'
import DiffFour from '../components/difference/DiffFour.js'
import DiffImage from '../components/difference/DiffImage'
import Head from 'next/head'


function Difference() {
  
  return (
    <div>
      <Head>  <title>Milosevic/Dental</title>
        <meta property="og:title" content="Dental Milošević" />
        <meta property="og:description" content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu. " />
        <meta property="og:image" content="https://weblala.online/_next/static/media/M3.70e05811.jpg" />   
        <meta name="google" content="notranslate" />
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

export default Difference