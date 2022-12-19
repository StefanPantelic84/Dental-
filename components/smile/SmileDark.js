import React from 'react'
import { useInView } from 'react-intersection-observer'

function SmileDark() {

    const darkB = useInView({triggerOnce:true})

    return (
        <div className='smiledark-container'>
            <div className='smiledark-topimg'></div>
            <div  className='smiledark-text'><p>"Najbolji deo onoga sto radim je kad vidim kako dentalna estetika moze da transformise osobu - njeno samopouzdanje, zdravlje i pogled na zivot. Veoma sam ponosna na nacin na koji moj tim i ja tretiramo nase pacijente."<span ref={darkB.ref} className={darkB.inView ? "span-b" : 'span-B'}><br></br>-Nikola V.</span></p></div>
            <div className='smiledark-botimg'></div>
        </div>
  )
}
 
export default SmileDark