import React from 'react'
import FirstVisitVideo from '../components/firstvisit/FirstVisitVideo'
import FirstVisitOne from '../components/firstvisit/FirstVisitOne'
import FirstVisitTwo from '../components/firstvisit/FirstVisitTwo'
import FirstVisitThree from '../components/firstvisit/FirstVisitThree'
import FirstVisitFour from '../components/firstvisit/FirstVisitFour'
import FirstVisitLast from '../components/firstvisit/FirstVisitLast'
import FirstVisitImage from '../components/firstvisit/FirstVisitImage'
import Head from 'next/head'

function Prva_poseta() {
  return (
    <div >
       <Head>  <title>Milosevic/Dental</title>
        <meta property="og:title" content="Vaša prva poseta." />
        <meta property="og:description" content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu. " />
        <meta property="og:image" content="https://milosevicdental.com/_next/static/media/firstCover.828fc3b4.webp" />   
        <meta name="google" content="notranslate" />
        <meta name="description" content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu." />
  </Head>
        <FirstVisitImage />
        <FirstVisitVideo />
        <FirstVisitOne />
        <FirstVisitTwo />
        <FirstVisitThree />
        <FirstVisitFour />
        <FirstVisitLast />
    </div>
  )
}

export default Prva_poseta