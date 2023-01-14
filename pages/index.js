import react from 'react'
import Homepage from '../components/home/Homepage'
import Head from 'next/head'


export default function Home() {
  return (
  <div>
      <Head>  <title>Milosevic/Dental</title>
        <meta property="og:title" content="Stomatolog broj 1 - Beograd!" />
        <meta property="og:description" content="Mi učestvujemo u stvaranju zdravih, lepih osmeha koji menjaju život u potpunosti.Smatramo da zaslužujete najbolju stomatološku negu. " />
        <meta property="og:image" content="https://weblala.online/_next/static/media/M3.70e05811.jpg" />   
        <meta name="google" content="notranslate" />
  </Head>
   <Homepage />
    </div>
  )
}
