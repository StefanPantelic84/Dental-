import React from 'react'
import { useInView } from 'react-intersection-observer'

function diffone() {
    const diff01 = useInView({triggerOnce:true})
  return (
    <div className='diffone-container'>
    <div className='diffone-text'>
      <div className='diffone-title'>
      <h1  ref={diff01.ref} className={diff01.inView ? 'numberD01' : 'bignumberD01'}>01</h1>
      <h6>Dobro dosli</h6>
      </div>
      <p>Ovde vas dočekujemo sa osmehom.Od trenutka kada udjete želimo da se osećate kao da ovde pripadate.Uživajte u ličnoj pažnji našeg tima.Smatramo da je put kod stomatologa jedan od najvažnijih delova vašeg dana.</p>
    </div>
    <div className='diffone-img'></div>
  </div> 
  )
}

export default diffone 