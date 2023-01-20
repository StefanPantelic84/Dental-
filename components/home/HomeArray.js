import Link from 'next/link';
import React from 'react'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

function HomeArray() {

    const firstRef = useInView({triggerOnce:true})

    const [arrayIndex,setArrayIndex] = useState(0);

    const myArray = [
        {
   
            "passus" : 'NAJBOLJI STOMATOLOG U BEOGRADU. ONI SU UVEK EFIKASNI, PROFESIONALNI, LJUBAZNI I PUNI ZNANJA. MOJA DECA I JA SMO NA REDOVNIM KONTROLAMA U MILOŠEVIC DENTAL, IMAM SREĆE DA SAM IH PRONAŠLA. TOPLO PREPORUČUJEM!!',
            "name" : "Vesna M."
        },
        {
            
            "passus" : "MILOŠEVIC DENTAL JE BILO MOJE DALEKO NAJBOLJE ISKUSTVO U BILO KOJOJ STOMATOLOŠKOJ ORDINACIJI CELOG MOG ŽIVOTA. OSOBLJE JE BILO TAKO LJUBAZNO, I STOMATOLOG JE OBJASNIO SVE ŠTA RADI I PITALA ME ŠTA ŽELIM I SA PAŽNJOM ODGOVARALA NA SVA MOJA PITANJA. UOPŠTENO ODLIČNO MESTO I PREPORUČUJEM SVIMA MILOŠEVIC/DENTAL .",
            "name" : "Milan K."
        },
        {
 
            "passus" : "OSOBLJE IMA TOLIKO STOMATOLOŠKOG ZNANJA! NIKAD NISAM IMAO STOMATOLOGA KOJI JE IMAO VREMENA DA OBJASNI ŠTA RADI ILI ZAŠTO MI TREBA ODREĐEN TRETMAN. U PROŠLOSTI SA PRETHODNIM STOMATOLOŠKIM ORDINACIJAMA, SAMO MI JE REČENO ŠTA MI TREBA I AKO SAM PITAO ZAŠTO,DELOVALO JE KAO DA SAM TERET I DA IH VREĐAM PITANJEM. NEGA I KVALITET KOJI ĆETE DOBITI VREDNI SU SVAKOG DINARA!",
            "name" : "Marko Z."
        },
        {
        
            "passus" : "VIŠE GODINA SAM PACIJENT U MILOŠEVIĆ DENTAL-U. ONI SU UVEK TRETIRALI MENE I MOJU PORODICU SA NAJVEĆOM PAŽNJOM. DR. MILICA JE JAKO STRPLJIVA I LJUBAZNA I UVEK ISKRENA SA VAMA. IMA ODLIČNOG ASISTENTA KOJI JE TAKODJE U KORAKU SA VREMENOM I SA AKTUELNIM TRENDOVIMA U STOMATOLOGIJI. TOPLO PREPORUČUJEM.",
            "name" : "Stefan P."
        },
        {
         
            "passus" : "Zadovoljstvo je ići kod zubara u mILOŠEVIĆ Dental. ORDINACIJA je prelepa, oseća se mir i OPUŠTENOST. SVI SU UVEK NASMEJANI, LJUBAZNI I PAŽLJIVI Sve u vezi oVE ORDINACIJE je odlično! Asistenti čine da se osećate prijatno. Verovatno najbolji zubar kojeg sam ikada videla. Predivno mesto! Predivno osoblje! Divni doktori!",
            "name" : "Branka J."
        },
    ]

  return (
    <div className='homearray-container'>
        <div className='homearray-text'>
        <h1>Iskustva</h1>  
        <p>{myArray[arrayIndex].passus}</p>
        <h6>{myArray[arrayIndex].name}</h6>
        </div>
        <div className='homearray-call'><Link href="/Iskustva">ISKUSTVA PACIJENATA</Link>
        <div className={firstRef.inView ? 'homearray-right' : 'homearray-right-A'} onClick={()=>{
            if (arrayIndex < 4) {
               setArrayIndex(arrayIndex + 1)
            }else { 
                setArrayIndex(0)
            }   
        }}>{'>'}</div>
        
        <div ref={firstRef.ref} className={firstRef.inView ? 'homearray-left' : 'homearray-left-A'} onClick={()=>{
            if (arrayIndex > 0) {
               setArrayIndex(arrayIndex - 1)
            }else {
                setArrayIndex(4)
            }
        }}>{'<'}</div></div>
        
        </div>
  )
}

export default HomeArray