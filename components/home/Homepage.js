import React from 'react'
import Connect from '../Connect'
import HomeArray from './HomeArray'
import HomeBelong from './HomeBelong'
import HomeDark from './HomeDark'
import HomeDifference from './HomeDifference'
import HomeImage from './HomeImage'
import HomePassion from './HomePassion'
import HomeSmile from './HomeSmile'



function Homepage() {
  return (
    <div>
    <HomeImage />
    <HomeDifference />
    <HomeBelong />
    <HomeDark />
    <HomePassion />
    <HomeSmile />
    <HomeArray />
    <Connect />
    </div>
  )
}

export default Homepage