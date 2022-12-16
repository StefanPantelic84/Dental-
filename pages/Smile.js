import React from 'react'
import Navigation from '../components/Navigation'
import SmileCare from '../components/smile/SmileCare'
import SmileCosmetic from '../components/smile/SmileCosmetic'
import SmileDark from '../components/smile/SmileDark'
import SmileImage from '../components/smile/SmileImage'
import Connect from '../components/Connect'
import Footer from '../components/Footer'

function Smile() {
  return (
    <div>
        <Navigation />
        <SmileImage />
        <SmileCare />
        <SmileDark />
        <SmileCosmetic />
        <Connect />
        <Footer />
    </div>
  )
}

export default Smile