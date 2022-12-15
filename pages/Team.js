import React from 'react'
import Navigation from '../components/Navigation'
import TeamAssistents from '../components/team/TeamAssistents'
import TeamFamily from '../components/team/TeamFamily'
import TeamHead from '../components/team/TeamHead'
import TeamHygienist from '../components/team/TeamHygienist'
import TeamImage from '../components/team/TeamImage'
import Connect from '../components/Connect'

function Team() {
  return (
    <div>
      <Navigation />
      <TeamImage />
      <TeamHead />
      <TeamFamily />
      <TeamAssistents />
      <TeamHygienist />
      <Connect />
    </div>
  )
}

export default Team