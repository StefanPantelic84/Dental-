import React from 'react'
import Link from 'next/link'

function Connect() {
  return (
    <div className='connect-container'>
      <div className='connect-text'>
        <div className='connect-title'>
        <h6>POVEŽITE SE SA NAMA</h6>
        </div>
        <p>SMATRAMO DA ZASLUŽUJETE NAJBOLJE STOMATOLOŠKO ISKUSTVO. POZOVITE <a href='tel:00381652828678'>(+381)65/2828678</a> ILI KLIKNITE DOLE DA ZAKAŽETE SVOJU PRVU POSETU. RADUJEMO SE NAŠEM SUSRETU!</p>
        <Link href='/Contact'><div className='connect-call'>RADNO VREME & LOKACIJA</div></Link>
      <div className='connect-call2'><a href='tel:00385652828678'>ZAKAŽITE PREGLED</a></div>
      </div>
      <div className='connect-img'></div>
      
    </div>
  )
}

export default Connect