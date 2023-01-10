import Link from 'next/link';
import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function NotFound() {

  const router = useRouter();

  useEffect(()=>{
    setTimeout(()=>{
      router.push('/')
    },1)
  },[])


  return (
    <div className='notFound'>
        <h1>Ooooopsss....</h1>
        <h2>Došlo je do greške.</h2>
        <Link href="/"><h1>--Vrati se nazad na pocetnu--</h1></Link>
    </div>
  )
}

export default NotFound;