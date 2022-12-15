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

function FirstVisit() {
  return (
    <div>
        <Navigation />
        <FirstVisitImage />
        <FirstVisitVideo />
        <FirstVisitOne />
        <FirstVisitTwo />
        <FirstVisitThree />
        <FirstVisitFour />
        <FirstVisitLast />
        <Connect />
    </div>
  )
}

export default FirstVisit