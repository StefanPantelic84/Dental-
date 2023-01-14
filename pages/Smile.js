import React from 'react'
import Navigation from '../components/Navigation'
import SmileCare from '../components/smile/SmileCare'
import SmileCosmetic from '../components/smile/SmileCosmetic'
import SmileDark from '../components/smile/SmileDark'
import SmileImage from '../components/smile/SmileImage'
import Head from 'next/head'

function Smile() {
  return (
    <div>
        <Head>  <title>Milosevic/Dental</title>
        <meta property="og:title" content="Za blistav osmeh!" />
        <meta property="og:description" content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu. " />
        <meta property="og:image" content="https://weblala.online/_next/static/media/m43.8bf5a9f3.jpg" />   
        <meta name="google" content="notranslate" />
  </Head>
        <SmileImage />
        <SmileCare />
        <SmileDark />
        <SmileCosmetic />
    </div>
  )
}

export default Smile