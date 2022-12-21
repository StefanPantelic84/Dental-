import React from 'react'
import { useInView } from 'react-intersection-observer'

function DiffThree() {
  const diff03 = useInView({triggerOnce:true})
  return (
    <div className='diffthree-container'>
    <div className='diffthree-text'>
      <div className='diffthree-title'>
      <h1 ref={diff03.ref} className={diff03.inView ? 'numberD03' : 'bignumberD03'}>03</h1>
      <h6>ODGOVORI NA VAŠA PITANJA</h6>
      </div>
      <p>ČVRSTO VERUJEMO DA JE EDUKACIJA TOKOM VAŠE POSETE NAJBOLJI NAČIN DA POMOGNEMO U POBOLJŠANJU STANDARDA STOMATOLOGIJE U NAŠOJ ZAJEDNICI. OBOŽAVAMO DA POSTAVLJAMO PITANJA I PODSTIČEMO VAS DA UČINITE ISTO KAKO BISTE NAM POMOGLI DA OPTIMIZUJEMO VAŠE ORALNO ZDRAVLJE.</p>
    </div>
    <div className='diffthree-img'></div>
  </div>
  ) 
}

export default DiffThree