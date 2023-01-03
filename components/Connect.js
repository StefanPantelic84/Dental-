import React from 'react'
import Link from 'next/link'
import ThisMap from '../components/ThisMap'
function Connect() {

  return (
    <div className='connect-container'>
      <div className='connect-text'>
        <div className='connect-title'>
        <h6>POVEŽITE SE SA NAMA</h6>
        </div>
        <p>SMATRAMO DA ZASLUŽUJETE NAJBOLJE STOMATOLOŠKO ISKUSTVO. POZOVITE <a href='tel:00381652828678'>(+381)65/2828678</a> ILI KLIKNITE DOLE DA ZAKAŽETE SVOJU PRVU POSETU. RADUJEMO SE NAŠEM SUSRETU!</p>
        <div className='connect-call2'><a href='tel:00385652828678'>ZAKAŽITE PREGLED</a></div>
        <Link href='/Contact'><div className='connect-call'>RADNO VREME & LOKACIJA</div></Link>
      </div>
      <div className='connect-img'><a href='https://www.google.com/maps/place/Dental+Milo%C5%A1evi%C4%87/@44.8040678,20.3735672,19z/data=!3m1!4b1!4m5!3m4!1s0x475a6f6d9f252789:0xe393080b9bd35620!8m2!3d44.8040678!4d20.3741144?hl=sr' target='_blank'>s</a></div>  
      
    </div>
  )
}

export default Connect