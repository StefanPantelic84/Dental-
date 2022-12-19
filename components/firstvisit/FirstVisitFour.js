import React from 'react'
import { useInView } from 'react-intersection-observer'

function FirstVisitFour() {
  const ref04 = useInView({triggerOnce:true})
  return (
    <div className='firstvisitfour-container'>
        <div className='firstvisitfour-img'></div>
      <div className='firstvisitfour-text'>
        <div className='firstvisitfour-title'>
        <h1 ref={ref04.ref} className={ref04.inView ? 'number04' : 'bignumber04'}>04</h1>
        <h6 >DETALJNOST U RADU</h6>
        </div>
        <p>POSEBNO JE BITNO OBRATITI PAZNJU NA DETALJE. SVAKA DEO VAŠEG YUBA JE PODJENAKO VAŽAN. KOD NAS SE NIŠTA NE PREPUŠTA SLUČAJU. ZAJEDNO SA VAMA UVEK ĆCEMO PRONAĆI NAJBOLJI PUT ZA OČUVANJE VAŠIH ZUBA.</p>
      </div>
    </div>
  )
}

export default FirstVisitFour