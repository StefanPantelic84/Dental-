import React from 'react'
import Link from 'next/link';

function Menu({menuClose}) {

  return (
    <div className='menu-container' >
        <ul className='menu-paths'>
            <Link href="/Difference" onClick={menuClose}><li>O NAMA</li></Link>
            <Link href="/FirstVisit" onClick={menuClose}><li>VAŠA PRVA POSETA</li></Link>
            <Link href="/Team" onClick={menuClose}><li>UPOZNAJTE TIM</li></Link>
            <Link href="/Smile" onClick={menuClose}><li>NAJLEPSI OSMEH</li></Link>
            <Link href="/Story" onClick={menuClose}><li >ISKUSTVA PACIJENATA</li></Link>
            <Link href="/After" onClick={menuClose}><li>PRE I POSLE</li></Link>  
            <Link href="/Contact" onClick={menuClose}><li >CENOVNIK</li></Link>
            <Link href="/Articles" onClick={menuClose}><li >ČLANCI</li></Link>

        </ul>

    </div>
  )
}

export default Menu