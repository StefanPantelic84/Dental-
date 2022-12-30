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
    <h6>VERUJEMO U LIČNI PRISTUP</h6>
    </div>
    <p>ZA NAS JE VRLO BITNO DA VAS ČUJEMO, DA SASLUŠAMO VAŠU PRIČU. VERUJEMO I TRUDIMO SE DA RAZUMEMO SVAKU OSOBU, DA IZGRADIMO ODNOS SA VAMA BAZIRAN NA POVERENJU, KAKO BI MOGLI DA VAM OBEZBEDIMO REŠENJA KOJA VAM NAJVIŠE ODGOVARAJU.</p>
  </div>

</div>
  )
}

export default difftwo