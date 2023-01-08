import Link from 'next/link'
import React from 'react'

function HomePassion() {
  return (
    <div className='homepassion-container'>
      <div className='homepassion-text'>
        <div className='homepassion-title'>
        <h6>Strast Prema</h6>
        <h5>Svom Poslu</h5> 
        </div>
      </div>
      <div className='homepassion-img'></div>
      <div className='homepassion-call'><Link href="/Team">DR.MILOŠEVIĆ MILICA</Link></div>
    </div>
  )
} 

export default HomePassion