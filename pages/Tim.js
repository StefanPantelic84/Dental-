import React from 'react'

import TeamAssistents from '../components/team/TeamAssistents'
import TeamFamily from '../components/team/TeamFamily'
import TeamHead from '../components/team/TeamHead'
import TeamImage from '../components/team/TeamImage'


function Tim() {
  return (
    <div>
      <TeamImage />
      <TeamHead />
      <TeamFamily />
      <TeamAssistents />
    </div>
  )
}

export default Tim