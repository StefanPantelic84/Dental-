import React from 'react'
import { useInView } from 'react-intersection-observer'

function DiffFour() {
  const diff04 = useInView({triggerOnce:true})
  return (
    <div className='difffour-container'>
    <div className='difffour-img'></div>
  <div className='difffour-text'>
    <div className='difffour-title'>
    <h1 ref={diff04.ref} className={diff04.inView ? 'numberD04' : 'bignumberD04'}>04</h1>
    <h6 >DETALJNOST U RADU</h6>
    </div>
    <p>POSEBNO JE BITNO OBRATITI PAZNJU NA DETALJE. SVAKA DEO VAŠEG YUBA JE PODJENAKO VAŽAN. KOD NAS SE NIŠTA NE PREPUŠTA SLUČAJU. ZAJEDNO SA VAMA UVEK ĆCEMO PRONAĆI NAJBOLJI PUT ZA OČUVANJE VAŠIH ZUBA.</p>
  </div>
</div>
  )
}

export default DiffFour