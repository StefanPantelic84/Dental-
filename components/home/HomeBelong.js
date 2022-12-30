import Link from 'next/link'
import React from 'react'

function HomeBelong() {
  return (
  <div>
    <div className='homebelong-title1'>
        Vi ovde pripadate!
    </div>
    <div className='homebelong-container'>
    <div className='homebelong-img'></div>
  <div className='homebelong-text'>

    <p>MI SE OVDE ČESTO SMEJEMO, KOD NAS PODRŠKA ZAMENJUJE OSUDU I UZNEMIRENOST.OVO JE MESTO GDE LJUBAZNOST I PAŽNJA GRADE DUGOTRAJNE VEZE. MESTO GDE UĐETE KAO STRANCI, A POSTANETE DEO PORODICE.</p>
  </div>
  <div className='homebelong-call'><Link href="/FirstVisit">vaša prva poseta?</Link></div>
</div>

</div>
  )
}

export default HomeBelong