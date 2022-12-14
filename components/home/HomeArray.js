import React from 'react'
import { useState } from 'react'

function HomeArray() {

    const [arrayIndex,setArrayIndex] = useState(0);

    const myArray = [
        {
   
            "passus" : 'OSOBLJE IMA TOLIKO STOMATOLOŠKOG ZNANJA! NIKAD NISAM IMAO STOMATOLOGA ILI HIGIJENISTA KOJI JE IMAO VREMENA DA OBJASNI ŠTA RADE ILI ZAŠTO MI TREBA ODREĐEN TRETMAN. U PROŠLOSTI SA PRETHODNIM STOMATOLOŠKIM ORDINACIJAMA, SAMO MI JE RECENO ŠTA MI TREBA I AKO SAM PITAO ZAŠTO JE KAO DA SAM TERET I VREĐAM IH PITANJEM. NEGA I KVALITET KOJI ĆETE DOBITI VREDNI SVAKOG DINARA!',
            "name" : "Marko Z."
        },
        {
     
            "passus" : "MILOSEVIC DENTAL JE BILO DALEKO MOJE NAJBOLJE ISKUSTVO U BILO KOJOJ STOMATOLOŠKOJ ORDINACIJI CELOG MOG ŽIVOTA. OSOBLJE JE BILO TAKO LJUBAZNO, I STOMATOLOG JE OBJASNIO SVE ŠTA RADI I PITALA ŠTA ŽELIM I UOPŠTENO ODLIČNO MESTO I  PREPORUČUJEM MILOSEVIC DENTAL SVIMA.",
            "name" : "Milan K."
        },
        {
 
            "passus" : "NAJBOLJI STOMATOLOZI I HIGIJENISTI U BEOGRADU. ONI SU UVEK EFIKASNI, PROFESIONALNI, ZNANI I LJUBAZNI. MOJA DECA I JA SMO NA REDOVNIM KONTROLAMA U MILOSEVIC DENTAL, IMAM SRECE DA SAM IH PRONASLA. TOPLO PREPORUČUJEM!!",
            "name" : "Vesna M."
        },
        {
        
            "passus" : "VIŠE GODINA SAM PACIJENT U LINVOOD DENTAL-u. ONI SU SE UVEK TRETIRALI MENE I MOJOJ PORODICI SA NAJVEĆOM PAŽNJOM. DR.MILOSEVIC JE JAKO STRPLJIVA I LJUBAZNA I UVEK ISKRENA SA VAMA. IMA ODLIČNOG HIGIJENISTU KOJI JE U KORAKU SA VREMENOM I SA AKTUELNIM TRENDOVIMA U STOMATOLOGIJI. TOPLO PREPORUČUJEM.",
            "name" : "Stefan P."
        },
        {
         
            "passus" : "Zadovoljstvo je ići kod zubara u Village Dental. Kancelarija je prelepa, oseća se mirno i čisto. Osoblje ima optimističan stav. Sve u vezi ovog zubara je odlično! Osoblje je ljubazno i pažljivo. Asistenti čine da se osećate prijatno. Verovatno najbolji zubar kojeg sam ikada video. Predivno mesto! Predivno osoblje! Divni doktori!",
            "name" : "Nataša J."
        },
    ]

  return (
    <div className='homearray-container'>
        <div className='homearray-text'>
        <h1>Changed Lives</h1>  
        <p>{myArray[arrayIndex].passus}</p>
        <h6>{myArray[arrayIndex].name}</h6>
        </div>
        <div className='homearray-call'><a>ISKUSTVA PACIJENATA</a></div>
        <div className='homearray-right' onClick={()=>{
            if (arrayIndex < 4) {
               setArrayIndex(arrayIndex + 1)
            }else {
                setArrayIndex(0)
            }
            console.log(arrayIndex)
        }}>{'>'}</div>
        
        <div className='homearray-left' onClick={()=>{
            if (arrayIndex > 0) {
               setArrayIndex(arrayIndex - 1)
            }else {
                setArrayIndex(4)
            }
            console.log(arrayIndex)
        }}>{'<'}</div>
        
        </div>
  )
}

export default HomeArray