import React from 'react'
import { useInView } from 'react-intersection-observer'

function DiffDark() {
  const darkD = useInView({triggerOnce:true})
  return (
    <div className='diffdark-container'>
    <div className='diffdark-topimg'></div>
    <div  className='diffdark-text'><p>"Najbolji deo onoga sto radim je kad vidim kako dentalna estetika moze da transformise osobu - njeno samopouzdanje, zdravlje i pogled na zivot. Veoma sam ponosna na nacin na koji moj tim i ja tretiramo nase pacijente."<span ref={darkD.ref} className={darkD.inView ? "span-Db" : 'span-DB'}><br></br>-Nikola V.</span></p></div>
    <div className='diffdark-botimg'></div>
</div>
  )
}

export default DiffDark