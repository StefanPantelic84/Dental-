import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function HomeSmile() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });


  return (
    <div className='homesmile-container'>
    <div className='homesmile-img'></div>
  <div className='homesmile-text'>
    <div className={inView ? 'homesmile-title-A' : 'homesmile-title'}>
    <h6 >NAJLEPSI OSMEH</h6>
    </div >
    <p ref={ref}>VERUJEMO DA ZASLUŽUJTE NAJBOLJU STOMATOLOŠKU NEGU. ZATO NUDIMO ŠIROK SPEKTAR KOZMETIČKIH REŠENJA, PORODIČNE NEGE I TRETMANA SKROJENIH PO MERI KOJI NAJBOLJE ODGOVARAJU VAMA I VAŠOJ PORODICI. MI UCESTVUJEMO U STVARANJU ZDRAVIH, LEPIH OSMEHA KOJI MENJAJU ŽIVOT U POTPUNOSTI.</p>
  </div>
  <div className='homesmile-call'><a>stomatološki tretman</a></div>
</div>
  )
}

export default HomeSmile