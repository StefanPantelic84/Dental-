import React from 'react'
import { useState,useEffect } from 'react'
import Menu from './Menu'
import  Link  from 'next/link';



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
  const [menuHidden,setMenuHidden] = useState(true)

  const menuOpen = () => {
    setMenuShow(false)
    setMenuHidden(false)
    document.body.style.overflow = 'hidden'
  }

  const menuClose = () => {
    setMenuShow(true)
    setMenuHidden(true)
    document.body.style.overflow = 'visible'
  } 

  return (
    <div className= {show ? 'navigation-container-fix' : 'navigation-container'} >
      <div className='nav-img'></div>
      <div className={menuHidden ? 'menu-hidden' : 'menu-visible'}><Menu menuClose={menuClose}/></div>
      <div className='nav-only'>
        <div className='call'><a href='tel:00381652828678'><span className="poziv">Call</span><span className='number'>+381652828678</span></a></div>
       <Link href='/'><div href='/' className='logo' onClick={menuClose}><img src='/DL.jpg' width={150} height={70} /><h1>Milosevic<span>Dental</span></h1></div></Link>
        <div className='menu' ><span onClick={menuOpen} className={menuShow ? 'menus' : 'menusH'}>Menu</span><span onClick={menuClose} className={menuShow ? 'close' :'closeH'}>Close</span></div>
        </div>
    </div>

  )
}

export default Navigation