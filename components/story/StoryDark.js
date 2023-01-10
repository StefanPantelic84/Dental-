import React from 'react'
import StoryFace from './StoryFace'

function StoryDark() {


    const stories = [
        {
            passus: '„Imala sam nisko samopouzdanje zbog gubitka nekih prednjih zuba. Posle obavljenog posla osećam se kao nova osoba. Stalno se smejem i dobijam komentare kako mi je lep osmeh i kako izgledam. Izgledam mlađe. Veoma sam srećna zbog svog novog osmeha i to se vidi.Hvala Milošević/dental”',
            span: 'Sanja U.',
            ref:'nameRef1'
        },
        {
            passus: '„MOJ MUŽ I JA SMO PACIJENTI U MILOŠEVIĆ/DENTAL-U SKORO PET GODINA. TIM JE UVEK LJUBAZAN I BRIŽAN. DR.MILICA JE PROFESIONALAC I VRLO JE PAŽLJIVA! CENIM ŠTO SE VREME ZAKAZIVANJA UVEK POŠTUJE I NIKAD SE NE ČEKA. TAKOĐE MOŽE SE PRIMETITI DA IMAJU NAJNOVIJU TEHNOLOGIJU JER ŽELE DA NJIHOVI PACIJENTI DOBIJU NAJVIŠU NEGU!”',
            span: 'Marina P.',
            ref:'nameRef2'
        },
        {
            passus: '„UVEK SAM SE PLAŠIO DA IDEM KOD STOMATOLOGA SVE DOK ME PRIJATELJ NIJE UPUTIO U MILOŠEVIĆ/DENTAL.NJIHOVA ORDINACIJA JE NAJBOLJA U GRADU. ONI ZAISTA BRINU O POTREBAMA, BRIGAMA I ORALNOM ZDRAVLJU SVOJIH PACIJENATA.DR.MILOŠEVIĆ JE STRPLJIVO SLUŠALA MOJU ZABRINUTOST O LEČENJU KOJE JE MOJ PRETHODNI STOMATOLOG PREPORUČIO I ODGOVORILA NA SVA MOJA PITANJA SA DETALJIMA NA NAČIN KOJI SAM MOGAO DA RAZUMEM. ONA POSEDUJE NAJNOVIJU TEHNOLOGIJU I VEŠTINE TAKO DA JE U STANJU DA SVOJIM PACIJENTIMA PONUDI NAJBOLJE ŠTO POSTOJI. NJENO OSOBLJE JE UVEK NASMEJANO I PRIJATNO I MOŽE SE PRIMETITI DA ZAISTA UŽIVAJU U RADU SA NJOM. TOPLO PREPORUČUJEM DR.MILICU I NJENO OSOBLJE!”',
            span: 'Mladen M.',
            ref:'nameRef3'
        },
        {
            passus: '„VIŠE GODINA DOLAZIM U MILOŠEVIĆ/DENTAL. ONI SU MENE I MOJU PORODICU UVEK  TRETIRALI  SA NAJVEĆOM PAŽnjom. DR. MILICA JE JAKO STRPLJIVA ,ljubazNA I UVEK ISKRENA. U KORAKU JE SA RAZVOJEM TEHNOLOGIJE I  SA AKTUELNIM TRENDOVIMA U STOMATOLOGIJI. TOPLO PREPORUČUJEM OVU ORDINACIJU.”',
            span: 'Bojana L.',
            ref:'nameRef4'
        },
        {
            passus: '„DOLAZIM OVDE VEĆ NEKO VREME. NIKAD NISAM IMAO NIKAKVE PROBLEME I DOBIJAO SAM ODGOVORE NA SVA MOJA PITANJA. DR.MILOŠEVIĆ UVEK ODVOJI VREMENA DA OBJASNI SVE ŠTO TREBA DA SE RADI. ONA UVEK PAZI NA DETALJE I RADI ODLIČAN POSAO. ODAVDE ĆETE OTIĆI SA VELIKIM OSMEHOM NA LICU.”',
            span: 'Goran S.',
            ref:'nameRef5'
        },
        {
            passus: '„DR.MILOŠEVIĆ JE Izvanredan STOMATOLOG.IMA ODLIČNE ASISTENTE I SVAKO OD NJIH JE STRPLJIV I TEMELJAN. MISLIM DA SAM PRIVILEGOVANA ŠTO SAM IH PRONAŠSLA. NE ŽIVIM U BEOGRADU, ALI NIJE MI PROBLEM DA PUTUJEM DA BIH BILA SIGURNA DA SAM U PRAVIM RUKAMA, NISAM NAROČITO POVERLJIVA, ALI U DR.MILICU IMAM APSOLUTNO POVERENJE.POTPUNO SAM ZADOVOLJNA NJENIM KOZMETIČKIM RADOM.IZGLED MOJIH ZUBA SADA JE NEVEROVATAN! VRLO PROFESIONALNO URADJENO! VELIKO HVALA SVIMA NJIMA NA NJIHOVOJ POSVEĆENOSTI!”',
            span: 'Gordana K.',
            ref:'nameRef6'
        },
        {
            passus: '„Osećam se odlično zbog obavljenog posla. Veoma sam zadovoljan! Imao sam mnogo bolova i problema u prošlosti. Već skoro 20 godina sam mogao da jedem samo odredjenu hranu. Otkako imam implante,Osećam se mnogo bolje. Veoma sam zadovoljan tretmanom dr.Milošević i njenog osoblja. Uvek su me tretirali sa poštovanjem! Preporučio bih lečenje svima.”',
            span: 'Branko Z.',
            ref:'Branko Z.'
        },
        {
            passus: '„Ceo život imam mnogo problema sa zubima. Jedno vreme sam bio veoma zabrinut za svoje zdravlje zbog loših zuba. Hvala Dr.Milici i njenom timu što su mi dali priliku da se ponovo smejem. Ovo je zaista blagoslov za mene. Odavno sam želeo sjajan, lep osmeh i uz njihovu pomoć to sam i ostvario. Preporučio bih ih svima!.”',
            span: 'Vladimir G.',
            ref:'Ivica G.'
        },
        {
            passus: '„NEDAVNO SAM SE PRESELIO NA NOVI BEOGRAD I TREBALO JE DA PRONAĐEM NOVOG STOMATOLOGA. ČUO SAM ODLICNE STVARI O ORDINACIJI MILOŠEVIĆ/DENTAL, PA SAM ODLUČIO DA IH PROBAM. NE MOGU BITI SREĆNIJI! SVAKI PUT KADA DODJEM, TRETIRAN SAM KAO DEO PORODICE. ZAKAZIVANJE SASTANKA JE LAKO I VREME ČEKANJA PRAKTIČNO NE POSTOJI. OSOBLJE JE ODLICNO I DR. MILOŠEVIĆ UVEK IMA VREMENA DA ME SASLUŠA. ZAJEDNO SA SVOJIM OSOBLJEM, ONA KROJI PLAN TRETMANA TAKO DA ODGOVARA MOJIM POTREBAMA. VIŠE NE MOGU SEBE DA ZAMISLIM DA IDEM NEGDE DRUGDE.”',
            span: 'Filip B.',
            ref:'nameRef9'
        },

    ]

    

  return (<div className='storybackground'>
    {stories.slice(0,4).map((story,i)=>{

        if (i%2 == 0) return (<div key={i} className='story-story'>

        <div  className='storydark-topimg'></div>
        <div className='storydark-container' >      
        <div  className='storydark-text'><p>{story.passus}<span className='span-1'><br></br>{story.span}</span></p></div>      
        </div>
        <div className='storydark-botimg'></div>
        </div>    )
    else return ( <div key={i} className='storylight-container'>
    <div className='storylight-text'><p>{story.passus}<span  className="span-1"><br></br>{story.span}</span></p></div>      
</div>) 
    })  
    }
    <StoryFace />

 {stories.slice(4,9).map((story,i)=>{

        if (i%2 == 0) return (<div key={i} className='story-story'>

        <div  className='storydark-topimg'></div>
        <div className='storydark-container' >      
        <div  className='storydark-text'><p>{story.passus}<span className='span-1'><br></br>{story.span}</span></p></div>      
        </div>
        <div className='storydark-botimg'></div>
        </div>    )
    else return ( <div key={i} className='storylight-container'>
    <div className='storylight-text'><p>{story.passus}<span  className="span-1"><br></br>{story.span}</span></p></div>      
</div>) 
    })  
    }


</div>
  )
}

export default StoryDark