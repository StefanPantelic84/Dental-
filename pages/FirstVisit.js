import React from 'react'
import FirstVisitVideo from '../components/firstvisit/FirstVisitVideo'
import FirstVisitOne from '../components/firstvisit/FirstVisitOne'
import Navigation from '../components/Navigation'
import FirstVisitTwo from '../components/firstvisit/FirstVisitTwo'
import FirstVisitThree from '../components/firstvisit/FirstVisitThree'
import FirstVisitFour from '../components/firstvisit/FirstVisitFour'
import FirstVisitLast from '../components/firstvisit/FirstVisitLast'
import FirstVisitImage from '../components/firstvisit/FirstVisitImage'
import Connect from '../components/Connect'
import Footer from '../components/Footer'

function FirstVisit() {
  return (
    <div>
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

export default FirstVisit