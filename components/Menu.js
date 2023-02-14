import React from 'react'
import Link from 'next/link';

function Menu({menuClose}) {

  return ( 
    <div className='menu-container' >
        <ul className='menu-paths'>
            <Link href="/" onClick={menuClose}><li>POČETNA</li></Link>
            <Link href="/Stomatolog" onClick={menuClose}><li>O NAMA</li></Link>
        
            <Link href="/Zubar" onClick={menuClose}><li>VAŠA PRVA POSETA</li></Link>
            <Link href="/Osmeh" onClick={menuClose}><li>NAJLEPŠI OSMEH</li></Link>
            <Link href="/Zubi_pre_i_posle" onClick={menuClose}><li>PRE I POSLE</li></Link> 
            <Link href="/Iskustva_kod_zubara" onClick={menuClose}><li >ISKUSTVA</li></Link> 
            <Link href="/Cene_zubar" onClick={menuClose}><li>CENOVNIK</li></Link>
            <Link href="/Clanak" onClick={menuClose}><li>ČLANCI</li></Link>
        </ul>

    </div>
  )
}

export default Menu