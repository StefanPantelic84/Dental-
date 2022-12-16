import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import React from 'react'

function AfterSlide() {

    const beforeAfter = [{
        back:'"/nah1.jpg"',
        front:'"/nah2.jpg"',
        title:'Say something first',
        p:'hightj jskskf kekkekek kfafpwafpafkawf dada fowf waof',
    },
    {
        back:'"/smile.jpg"',
        front:'"/after.jpg"',
        title:'Say something second',
        p:'hightj jskskf kekkekek kfafpwafpafkawf dada fowf waof',
    },
    {
        back:'"/osmeh.jpg"',
        front:'"/smeh2.jpg"',
        title:'Say something third',
        p:'hightj jskskf kekkekek kfafpwafpafkawf dada fowf waof',
    },
    {
        back:'"/story.jpg"',
        front:'"/teamsmile.jpg"',
        title:'Say something fourth',
        p:'hightj jskskf kekkekek kfafpwafpafkawf dada fowf waof',
    },
    {
        back:'"/story.jpg"',
        front:'"/teamsmile.jpg"',
        title:'Say something fourth',
        p:'hightj jskskf kekkekek kfafpwafpafkawf dada fowf waof',
    },
    {
        back:'"/bljak1.jpg"',
        front:'"/bljak2.jpg"',
        title:'Say something fourth',
        p:'hightj jskskf kekkekek kfafpwafpafkawf dada fowf waof',
    },
]

  return (
    <div className='afterslide-container'>
        {beforeAfter.map((ba,i)=>{
            if (i%2 == 0){
            return (
            <>
                <div className='afterslide-holder'>
                    <div className='slide-back' style = {{backgroundImage : `url(${ba.back})`}}></div>
                    <div className='slide-front' style = {{backgroundImage : `url(${ba.front})`}}><div className='slide-right'>{'→'}</div></div>
                    
                </div>
                   
                <div className='afterslide-text'>
                    <h1>{ba.title}</h1>
                    <p>{ba.p}</p>
                </div>
            </>)}
            else {
                return (
                    <>
                     <div className='afterslide-text'>
                            <h1>{ba.title}</h1>
                            <p>{ba.p}</p>
                        </div>
                        <div className='afterslide-holder'>
                            <div className='slide-back' style = {{backgroundImage : `url(${ba.back})`}}></div>
                            <div className='slide-front' style = {{backgroundImage : `url(${ba.front})`}}><div className='slide-right'>{'→'}</div></div>
                        </div>
                       
                    </>)
            }
        })
        
        }
   
    </div>
  )
}

export default AfterSlide