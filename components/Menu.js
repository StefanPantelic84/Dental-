import React from 'react'
import Link from 'next/link';

function Menu({menuClose}) {

  return ( 
    <div className='menu-container' >
        <ul className='menu-paths'>
            <Link href="/" onClick={menuClose}><li>POČETNA</li></Link>
            <Link href="/O_nama" onClick={menuClose}><li>O NAMA</li></Link>
            <Link href="/Pre_i_posle" onClick={menuClose}><li>PRE I POSLE</li></Link> 
            <Link href="/Prva_poseta" onClick={menuClose}><li>VAŠA PRVA POSETA</li></Link>
            <Link href="/Najlepsi_osmeh" onClick={menuClose}><li>NAJLEPŠI OSMEH</li></Link>
            <Link href="/Iskustva" onClick={menuClose}><li >ISKUSTVA</li></Link> 
            <Link href="/Cenovnik" onClick={menuClose}><li>CENOVNIK</li></Link>
            <Link href="/Articles" onClick={menuClose}><li>ČLANCI</li></Link>
        </ul>

    </div>
  )
}

export default Menu