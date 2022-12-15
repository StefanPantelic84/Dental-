import React from 'react'
import { useInView } from 'react-intersection-observer'

function HomeDark() {

  const firstRef = useInView({triggerOnce:true})

  return (
    <div className='homedark-container'>
        <div className='homedark-topimg'></div>
        <div  className='homedark-text'><p>"Najbolji deo onoga sto radim je kad vidim kako dentalna estetika moze da transformise osobu - njeno samopouzdanje, zdravlje i pogled na zivot. Veoma sam ponosna na nacin na koji moj tim i ja tretiramo nase pacijente."<span ref={firstRef.ref} className={firstRef.inView ? "span" : 'span-A'}><br></br>-Dr.Milosevic</span></p></div>
        <div className='homedark-botimg'></div>
    </div>
  )
}

export default HomeDark