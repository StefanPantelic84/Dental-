import React from 'react'
import Link from 'next/link';

function Menu() {

  const flowVisible = () => {
    document.body.style.overflow = 'visible'
  }

  return (
    <div className='menu-container' >
        <ul className='menu-paths'>
            <Link href="/FirstVisit" onClick={flowVisible}><li>VAŠA PRVA POSETA</li></Link>
            <Link href="/Team"><li>UPOZNAJTE TIM</li></Link>
            <li>NAJLEPSI OSMEH</li>
            <li >ISKUSTVA PACIJENATA</li>
            <li>NAŠI ČLANCI</li>
            <li>PRE I POSLE</li>
            <li >KONTAKTIRAJTE NAS</li>
        </ul>

    </div>
  )
}

export default Menu