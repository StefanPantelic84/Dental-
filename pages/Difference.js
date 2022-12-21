import React from 'react'
import DiffOne from '../components/difference/DiffOne'
import DiffTwo from '../components/difference/DiffTwo'
import DiffDark from '../components/difference/DiffDark.js'
import DiffThree from '../components/difference/DiffThree.js'
import DiffFour from '../components/difference/DiffFour.js'
import DiffImage from '../components/difference/DiffImage'


function Difference() {
  return (
    <div>
      <DiffImage />
        <DiffOne />
        <DiffTwo />
        <DiffDark />
        <DiffThree />
        <DiffFour />   
    </div>
  )
}

export default Difference