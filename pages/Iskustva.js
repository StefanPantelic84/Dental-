import React from 'react'
import StoryImage from '../components/story/StoryImage'
import StoryDark from '../components/story/StoryDark'
import Head from 'next/head'


function Iskustva() {
  
  return (
    <div>
          <Head>  <title>Milosevic/Dental</title>
        <meta property="og:title" content="Za blistav osmeh!" />
        <meta property="og:description" content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu. " />
        <meta property="og:image" content="https://weblala.online/_next/static/media/c2.d556df6a.jpg" />   
        <meta name="google" content="notranslate" />
  </Head>
      <StoryImage />
      <StoryDark />
    </div>
  )
}

export default Iskustva