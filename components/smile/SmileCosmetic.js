import React from 'react'
import Image from 'next/image'

function SmileCosmetic() {
  return (
    <div className='smilecosmetic-container'>
    <div className='smilecosmetic-img'>
    <Image 
          src='/smileCosm.webp'
          alt='kozmetika zuba, predivan osmeh'
          width={800}
          height={800}
          quality={100}
          style={{
            position:'absolute',
            top:0,
            left:0,
            width:'100%',
            height:'100%',
           objectFit:'cover',
           objectPosition: '50% 50%'
          }}
        />
    </div>
  <div className='smilecosmetic-text'>
    <div className='smilecosmetic-title'>
    <h6>KOZMETIČKA NEGA ZUBA</h6>
    </div>
    <p>NUDIMO ESTETSKU NEGU ZUBA DA BI VAM DALI ZDRAV, PRIRODAN, LEP OSMEH.</p>
    <ul>
      <li>Izbeljivanje zuba</li>
      <li>Providne folije</li>
      <li>Ortodoncija</li>
      <li>Fasete</li>
      <li>Dizajn osmeha</li>
      <li>Lepljenje zuba</li>
      <li>Oblikovanje desni</li>
    </ul>
  </div>

</div>
  )
}

export default SmileCosmetic