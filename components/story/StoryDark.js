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
            passus: '„Moj muž i ja smo pacijenti u Milošević/dental-u skoro pet godina. Tim je uvek ljubazan i brižan. Dr.Milica je profesionalac i vrlo je pažljiva! Cenim što se vreme zakazivanja uvek poštuje i nikad se ne čeka. Takođe, može se primetiti da imaju najnoviju tehnologiju jer žele da njihovi pacijenti dobiju najvišu negu!”',
            span: 'Marina P.',
            ref:'nameRef2'
        },
        {
            passus: '„Uvek sam se plašio da idem kod stomatologa sve dok me prijatelj nije uputio u Milošević/dental.Njihova ordinacija je najbolja u gradu. Oni zaista brinu o potrebama, brigama i oralnom zdravlju svojih pacijenata.Dr.Milošević je strpljivo slušala moju zabrinutost o lečenju koje je moj prethodni stomatolog preporučio i odgovorila je na sva moja pitanja sa detaljima na način koji sam mogao da razumem. Ona poseduje najnoviju tehnologiju i veštine tako da je u stanju da svojim pacijentima ponudi najbolje što postoji. Njeno osoblje je uvek nasmejano i prijatno i može se primetiti da zaista uživaju u radu sa njom. Toplo preporučujem Dr.Milicu i njeno osoblje!”',
            span: 'Mladen M.',
            ref:'nameRef3'
        },
        {
            passus: '„Više godina dolazim u Milošević/dental. Oni su mene i moju porodicu uvek  tretirali  sa najvećom pažnjom. Dr.Milica je jako strpljiva ,ljubazna i uvek iskrena. U koraku je sa razvojem tehnologije i  sa aktuelnim trendovima u stomatologiji. Toplo preporučujem ovu ordinaciju.”',
            span: 'Bojana L.',
            ref:'nameRef4'
        },
        {
            passus: '„Dolazim ovde već neko vreme. Nikad nisam imao nikakve probleme i dobijao sam odgovore na sva moja pitanja.Dr.Milošević uvek odvoji vremena da objasni sve što treba da se radi.Ona uvek pazi na detalje i radi odličan posao. Odavde ćete otići sa velikim osmehom na licu.”',
            span: 'Goran S.',
            ref:'nameRef5'
        },
        {
            passus: '„Dr.Milošević je izvanredan stomatolog.Ima odlične asistente i svako od njih je strpljiv i temeljan. Mislim da sam privilegovana što sam ih pronašla. Ne živim u beogradu, ali nije mi problem da putujem da bih bila sigurna da sam u pravim rukama, nisam naročito poverljiva, ali u dr.Milicu imam apsolutno poverenje.Potpuno sam zadovoljna njenim kozmetičkim radom.Izgled mojih zuba sada je neverovatan! Vrlo profesionalno uradjeno!Veliko hvala svima njima na njihovoj posvećenosti!”',
            span: 'Gordana K.',
            ref:'nameRef6'
        },
        {
            passus: '„Osećam se odlično zbog obavljenog posla. Veoma sam zadovoljan! Imao sam mnogo bolova i problema u prošlosti. Već skoro 20 godina sam mogao da jedem samo odredjenu hranu. Otkako imam implante,osećam se mnogo bolje. Veoma sam zadovoljan tretmanom dr.Milošević i njenog osoblja. Uvek su me tretirali sa poštovanjem! Preporučio bih lečenje svima.”',
            span: 'Branko Z.',
            ref:'Branko Z.'
        },
        {
            passus: '„Ceo život imam mnogo problema sa zubima. Jedno vreme sam bio veoma zabrinut za svoje zdravlje zbog loših zuba. Hvala Dr.Milici i njenom timu što su mi dali priliku da se ponovo smejem. Ovo je zaista blagoslov za mene. Odavno sam želeo sjajan, lep osmeh i uz njihovu pomoć to sam i ostvario. Preporučio bih ih svima!.”',
            span: 'Vladimir G.',
            ref:'Ivica G.'
        },
        {
            passus: '„Nedavno sam se preselio na Novi Beograd i trebalo je da pronađem novog stomatologa. Čuo sam odlične stvari o ordinaciji Milošević/dental, pa sam odlučio da ih probam. Ne mogu biti srećniji! svaki put kada dodjem, tretiran sam kao deo porodice. Zakazivanje sastanka je lako i vreme čekanja praktično ne postoji. Osoblje je odlicno i dr.Milošević uvek ima vremena da me sasluša. Zajedno sa svojim osobljem, ona kroji plan tretmana tako da odgovara mojim potrebama. Više ne mogu sebe da zamislim da idem negde drugde.”',
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