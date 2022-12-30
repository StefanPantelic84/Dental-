import React from 'react'
import FirstVisitVideo from '../components/firstvisit/FirstVisitVideo'
import FirstVisitOne from '../components/firstvisit/FirstVisitOne'
import FirstVisitTwo from '../components/firstvisit/FirstVisitTwo'
import FirstVisitThree from '../components/firstvisit/FirstVisitThree'
import FirstVisitFour from '../components/firstvisit/FirstVisitFour'
import FirstVisitLast from '../components/firstvisit/FirstVisitLast'
import FirstVisitImage from '../components/firstvisit/FirstVisitImage'

function FirstVisit() {
  return (
    <div >
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