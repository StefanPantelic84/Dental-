import React from 'react'
import StoryImage from '../components/story/StoryImage'
import Navigation from '../components/Navigation'
import StoryFace from '../components/story/StoryFace'
import StoryDark from '../components/story/StoryDark'
import Connect from '../components/Connect'
import Footer from '../components/Footer'

function Story() {
  return (
    <div>
      <Navigation />
      <StoryImage />
      <StoryFace />
      <StoryDark />
      <Connect />
      <Footer />
    </div>
  )
}

export default Story