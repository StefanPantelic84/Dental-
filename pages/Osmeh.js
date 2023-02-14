import React from 'react'
import SmileCare from '../components/smile/SmileCare'
import SmileCosmetic from '../components/smile/SmileCosmetic'
import SmileDark from '../components/smile/SmileDark'
import SmileImage from '../components/smile/SmileImage'
import Head from 'next/head'

function Osmeh() {
  return (
    <>
        <Head>  <title>Milosevic/Dental</title>
        <meta property="og:title" content="Za blistav osmeh!" />
        <meta property="og:description" content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu. " />
        <meta property="og:image" content="https://milosevicdental.com/_next/static/media/smileCover.8bf5a9f3.webp" />   
        <meta name="google" content="notranslate" />
        <meta name="description" content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu." />
  </Head>
        <SmileImage />
        <SmileCare />
        <SmileDark />
        <SmileCosmetic />
    </>
  )
}

export default Osmeh