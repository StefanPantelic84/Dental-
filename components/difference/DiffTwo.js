import React from 'react'
import { useInView } from 'react-intersection-observer'

function difftwo() {
    const diff02 = useInView({triggerOnce:true})
  return (
    <div className='difftwo-container'>
    <div className='difftwo-img'></div>
  <div className='difftwo-text'>
    <div className='difftwo-title'>
    <h1 ref={diff02.ref} className={diff02.inView ? 'numberD02' : 'bignumberD02'}>02</h1>
    <h6>Upoznavanje</h6>
    </div>
    <p>TOKOM VAŠE PRVE POSETE, NAŠ TIM ĆE POČETI SA PROCENOM VAŠEG UKUPNOG ORALNOG ZDRAVLJA. DOBIĆETE NAPREDNE DIGITALNE RTG SNIMKE, PARODONTALNU PROCENU I STOMATOLOŠKI PREGLED. NA PUTU ĆEMO VAS BOLJE UPOZNATI, NAUČITI VAŠE PREFERENCIJE U LEČENJU I RAZUMEVATI CILJEVE ZA LEP ZDRAV OSMEH.</p>
  </div>

</div>
  )
}

export default difftwo