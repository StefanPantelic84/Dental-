import React from 'react'
import Image from 'next/image'

function FirstVisitVideo() {
  return (
   
    <div className='full-container-video'>
      <div className='container-video'>
      <div className='video-left'>
      <Image 
          src='/firstVideo.jpg'
          alt='stomatoloska ordinacija'
          width={620}
          height={360}
          quality={100}
          style={{
            position:'absolute',
            top:0,
            left:0,
            width:'100%',
            height:'100%',
           objectFit:'cover',
           objectPosition: '50% 50%'
          }}
        />
      </div>
      </div>
      <div className='video-text'>
        <p>Šta Očekivati</p> 
        <p>Prilikom Posete</p>
      </div>
      
    </div> 
   
  )
}

export default FirstVisitVideo