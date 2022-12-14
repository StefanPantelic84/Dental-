import React from 'react'
import { useState,useEffect } from 'react'



function Navigation() { 

  const [show, setShow] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)
  
  const checkScroll = () => {
    setLastScroll(window.scrollY)

    if(window.scrollY < lastScroll) {
      setShow(true)
    } 
    else {
      setShow(false)
    }
  }
  useEffect (()=> {
    window.addEventListener('scroll', checkScroll)
  },[lastScroll])

  const [menuShow,setMenuShow] = useState(true)


 console.log(menuShow)

  return (
    <div className= {show ? 'navigation-container-fix' : 'navigation-container'} >
      <div className='nav-only'>
        <div className='call'><a href='tel:00381652828678'><span className="poziv">Call</span><span className='number'>+381652828678</span></a></div>
        <div className='logo'><img src='/DL.jpg' width={150} height={70} /><h1>Milosevic<span>Dental</span></h1></div>
        <div className='menu' onClick={()=>{setMenuShow(!menuShow)}}><span className={menuShow ? 'menus' : 'menusH'}>Menu</span><span className={menuShow ? 'close' :'closeH'}>Close</span></div>
        </div>

    </div>
  )
}

export default Navigation