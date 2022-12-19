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

const hideFrontImg = () => {
    document.querySelector('.slide-front').style.left='200%';
    document.querySelector('.slide-back').style.filter='brightness(100%)';
}
const showFrontImg = () => {
    document.querySelector('.slide-front').style.left='10%';
    document.querySelector('.slide-back').style.filter='brightness(30%)';
}
const hideFrontImg2 = () => {
    document.querySelector('.slide2-front').style.left='200%';
    document.querySelector('.slide2-back').style.filter='brightness(100%)';
}
const showFrontImg2 = () => {
    document.querySelector('.slide2-front').style.left='10%';
    document.querySelector('.slide2-back').style.filter='brightness(30%)';
}

  return (
<div>
        <div className='afterslide-title'>
            <p>Naši Radovi:</p></div>
                <div className='afterslide-container'>
                <div className='afterslide-holder'>
                <div className='slide-right' onClick={hideFrontImg}>{'→'}</div>
                <div className='slide-left' onClick={showFrontImg}>{'←'}</div>  
                    <div className='slide-back'> </div>
                    <div className='slide-front'> </div>          
                </div>
                <div className='afterslide-text'>
                    <h1>NASLOV BROJ JEDAN</h1>
                    <p>hightj jskskf kekkekek kfafpwafpafkawf dada fowf waof</p>
                </div>
            </div>
            <div className='afterslide2-container'>
                     <div className='afterslide2-text'>
                            <h1>SECOND TEXT</h1>
                            <p>ofjojes pf pfp qq  qfappadadpadkap</p>
                        </div>
                        <div className='afterslide2-holder'>
                        <div className='slide-right2' onClick={hideFrontImg2}>{'→'}</div> 
                        <div className='slide-left2' onClick={showFrontImg2}>{'←'}</div>  
                            <div className='slide2-back'></div>
                            <div className='slide2-front'></div>
                        </div>
                       
                    </div>
          
              
    </div>
  )
  }
export default AfterSlide