import React from 'react'
import { useInView } from 'react-intersection-observer'
 
function FirstVisitThree() {

  const ref03 = useInView({triggerOnce:true})

  return (
    <div className='firstvisitthree-container'>
      <div className='firstvisitthree-text'>
        <div className='firstvisitthree-title'>
        <h1 ref={ref03.ref} className={ref03.inView ? 'number03' : 'bignumber03'}>03</h1>
        <h6>ODGOVORI NA VAŠA PITANJA</h6>
        </div>
        <p>ČVRSTO VERUJEMO DA JE EDUKACIJA TOKOM VAŠE POSETE NAJBOLJI NAČIN DA POMOGNEMO U POBOLJŠANJU STANDARDA STOMATOLOGIJE U NAŠOJ ZAJEDNICI. OBOŽAVAMO DA POSTAVLJAMO PITANJA I PODSTIČEMO VAS DA UČINITE ISTO KAKO BISTE NAM POMOGLI DA OPTIMIZUJEMO VAŠE ORALNO ZDRAVLJE.</p>
      </div>
      <div className='firstvisitthree-img'></div>
    </div>
  )
}

export default FirstVisitThree