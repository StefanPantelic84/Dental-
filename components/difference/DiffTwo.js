import React from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

function difftwo() {
    const diff02 = useInView({triggerOnce:true})
  return (
    <div className='difftwo-container'> 
    <div className='difftwo-img'>
    <Image 
          src='/diffTwo.jpg'
          alt='bez straha kod stomatologa'
          width={800}
          height={1200}
          quality={100}
          style={{
            position:'absolute',
            top:0,
            left:0,
            width:'100%',
            height:'100%',
           objectFit:'cover',
           objectPosition: '50% 30%'
          }}
        />
    </div>
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