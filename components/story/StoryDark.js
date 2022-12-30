import React from 'react'
import { useInView } from 'react-intersection-observer'

function StoryDark() {

    const span1 = useInView()

    const stories = [
        {
            passus: '„UVEK SAM SE PLAŠIO DA IDEM KOD STOMATOLOGA SVE DOK ME PRIJATELJ NIJE UPUTIO U MILOŠEVIĆ/DENTAL.NJIHOVA ORDINACIJA JE NAJBOLJA U GRADU. ONI ZAISTA BRINU O POTREBAMA, BRIGAMA I ORALNOM ZDRAVLJU SVOJIH PACIJENATA.DR.MILOŠEVIĆ JE STRPLJIVO SLUŠALA MOJU ZABRINUTOST O LEČENJU KOJE JE MOJ PRETHODNI STOMATOLOG PREPORUČIO I ODGOVORILA NA SVA MOJA PITANJA SA DETALJIMA NA NAČIN KOJI SAM MOGAO DA RAZUMEM. ONA POSEDUJE NAJNOVIJU TEHNOLOGIJU I VEŠTINE TAKO DA JE U STANJU DA SVOJIM PACIJENTIMA PONUDI NAJBOLJE ŠTO POSTOJI. NJENO OSOBLJE JE UVEK NASMEJANO I PRIJATNO I MOŽE SE PRIMETITI DA ZAISTA UŽIVAJU U RADU SA NJOM. TOPLO PREPORUČUJEM DR.MILICU I NJENO OSOBLJE!”',
            span: 'Filip B.'
        },
        {
            passus: '„MOJ MUŽ I JA SMO PACIJENTI U MILOŠEVIĆ/DENTAL-U SKORO PET GODINA. TIM JE UVEK LJUBAZAN I BRIŽAN. DR.MILICA JE PROFESIONALAC I VRLO JE PAŽLJIVA! CENIM ŠTO SE VREME ZAKAZIVANJA UVEK POŠTUJE I NIKAD SE NE ČEKA. TAKOĐE MOŽE SE PRIMETITI DA IMAJU NAJNOVIJU TEHNOLOGIJU JER ŽELE DA NJIHOVI PACIJENTI DOBIJU NAJVIŠU NEGU!”',
            span: 'Marina P.'
        },
        {
            passus: '„NEDAVNO SAM SE PRESELIO NA NOVI BEOGRAD I TREBALO JE DA PRONAĐEM NOVOG STOMATOLOGA. ČUO SAM ODLICNE STVARI O ORDINACIJI MILOŠEVIĆ/DENTAL, PA SAM ODLUČIO DA IH PROBAM. NE MOGU BITI SREĆNIJI! SVAKI PUT KADA DODJEM, TRETIRAN SAM KAO DEO PORODICE. ZAKAZIVANJE SASTANKA JE LAKO I VREME ČEKANJA PRAKTIČNO NE POSTOJI. OSOBLJE JE ODLICNO I DR. MILOŠEVIĆ UVEK IMA VREMENA DA ME SASLUŠA. ZAJEDNO SA SVOJIM OSOBLJEM, ONA KROJI PLAN TRETMANA TAKO DA ODGOVARA MOJIM POTREBAMA. VIŠE NE MOGU SEBE DA ZAMISLIM DA IDEM NEGDE DRUGDE.”',
            span: 'Mladen M.'
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
            passus: 'GFFRF',
            span: 'GGFFF'
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


        if (i%2 == 0) return (<div className='story-story'>
        <div className='storydark-topimg'></div>
        <div className='storydark-container'>      
        <div  className='storydark-text'><p>{story.passus}<span  className="span-1"><br></br>{story.span}</span></p></div>      
        </div>
        <div className='storydark-botimg'></div>
        </div>    )
    else return ( <div className='storylight-container'>
    <div className='storylight-text'><p>{story.passus}<span  className="span-1"><br></br>{story.span}</span></p></div>      
</div>) 
    })  
    }
</>
  )
}

export default StoryDark