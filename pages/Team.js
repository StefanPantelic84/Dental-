import React from 'react'
import Navigation from '../components/Navigation'
import TeamAssistents from '../components/team/TeamAssistents'
import TeamFamily from '../components/team/TeamFamily'
import TeamHead from '../components/team/TeamHead'
import TeamImage from '../components/team/TeamImage'

import Footer from '../components/Footer'

function Team() {
  return (
    <div>
      <TeamImage />
      <TeamHead />
      <TeamFamily />
      <TeamAssistents />
    </div>
  )
}

export default Team