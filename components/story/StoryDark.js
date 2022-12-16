import React from 'react'

function StoryDark() {

    const stories = [
        {
            passus: '1111',
            span: '1111'
        },
        {
            passus: '2222',
            span: '2222'
        },
        {
            passus: '3333',
            span: '3333'
        },
        {
            passus: '4444',
            span: '4444'
        },
        {
            passus: '5555',
            span: '5555'
        },
        {
            passus: '6666',
            span: '6666'
        },
        {
            passus: '7777',
            span: '7777'
        },
        {
            passus: '8888',
            span: '8888'
        },
        {
            passus: '9999',
            span: '9999'
        },

    ]

  return (<>
    {stories.map((story,i)=>{
        if (i%2 == 0) return (<div className='storydark-container'>
        <div className='storydark-topimg'></div>
        <div  className='storydark-text'><p>"Najbolji deo onoga sto radim je kad vidim kako dentalna estetika moze da transformise osobu - njeno samopouzdanje, zdravlje i pogled na zivot. Veoma sam ponosna na nacin na koji moj tim i ja tretiramo nase pacijente."<span className="span"><br></br>-Dr.Milosevic</span></p></div>
        <div className='storydark-botimg'></div>
    </div>)
    else return ( <div className='storylight-container'>
    <div className='storylight-text'><p>"Najbolji deo onoga sto radim je kad vidim kako dentalna estetika moze da transformise osobu - njeno samopouzdanje, zdravlje i pogled na zivot. Veoma sam ponosna na nacin na koji moj tim i ja tretiramo nase pacijente."<span className="span"><br></br>-Dr.Milosevic</span></p></div>
</div>)
    }) 
    }
</>
  )
}

export default StoryDark