import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import React from 'react'

function AfterSlide() {

    const beforeAfter = [{
        back:'"/ugly.jpg"',
        front:'"/after2.jpg"',
        title:'Say something first'
    },
    {
        back:'"/smile.jpg"',
        front:'"/after.jpg"',
        title:'Say something second'
    },
    {
        back:'"/osmeh.jpg"',
        front:'"/smeh2.jpg"',
        title:'Say something third'
    },
    {
        back:'"/story.jpg"',
        front:'"/teamsmile.jpg"',
        title:'Say something fourth'
    },
    {
        back:'"/story.jpg"',
        front:'"/teamsmile.jpg"',
        title:'Say something fourth'
    },
]

  return (
    <div className='afterslide-container'>
        {beforeAfter.map((ba)=>{
            return (<div className='afterslide-holder'>
            <h1>{ba.title}</h1>
            <div className='slide-back' style = {{backgroundImage : `url(${ba.back})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
            <div className='slide-front' style = {{backgroundImage : `url(${ba.front})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}></div>
        </div>)
        })
        
        }
   
    </div>
  )
}

export default AfterSlide