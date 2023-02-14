import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function HomePassion() {
  return (
    <div className='homepassion-container'>
      <div className='homepassion-text'>
        <div className='homepassion-title'>
        <h6>Strast Prema</h6>
        <h5>Svom Poslu</h5> 
        </div>
      </div>
      <div className='homepassion-img'>
      <Image 
          src='/homeCover.webp'
          alt='pregled zuba kod zubara'
          width={1200}
          height={1015}
          quality={100}
          style={{
            position:'absolute',
            top:0,
            left:0,
            width:'100%',
            height:'100%',
           objectFit:'cover',
           objectPosition: '50% 45%'
          }}
        />
      </div>
      <div className='homepassion-call'><Link href="/Stomatolog">DR.MILOŠEVIĆ MILICA</Link></div>
    </div>
  ) 
} 

export default HomePassion