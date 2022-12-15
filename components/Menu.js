import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

function Menu() {

const router = useRouter();
const {id} = router.query

  return (
    <div className='menu-container' >
        <ul className='menu-paths'>
            <Link href="/FirstVisit"><li>VAŠA PRVA POSETA</li></Link>
            <li>UPOZNAJTE TIM</li>
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