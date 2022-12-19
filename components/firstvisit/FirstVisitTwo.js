import React from 'react'
import { useInView } from 'react-intersection-observer'

function FirstVisitTwo() {

  const ref02 = useInView({triggerOnce:true})

  return (
    <div className='firstvisittwo-container'>
        <div className='firstvisittwo-img'></div>
      <div className='firstvisittwo-text'>
        <div className='firstvisittwo-title'>
        <h1 ref={ref02.ref} className={ref02.inView ? 'number02' : 'bignumber02'}>02</h1>
        <h6>Upoznavanje</h6>
        </div>
        <p>TOKOM VAŠE PRVE POSETE, NAŠ TIM ĆE POČETI SA PROCENOM VAŠEG UKUPNOG ORALNOG ZDRAVLJA. DOBIĆETE NAPREDNE DIGITALNE RTG SNIMKE, PARODONTALNU PROCENU I STOMATOLOŠKI PREGLED. NA PUTU ĆEMO VAS BOLJE UPOZNATI, NAUČITI VAŠE PREFERENCIJE U LEČENJU I RAZUMEVATI CILJEVE ZA LEP ZDRAV OSMEH.</p>
      </div>
    
    </div>
  )
}

export default FirstVisitTwo