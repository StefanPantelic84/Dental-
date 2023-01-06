import React from 'react'

const priceArray = [
    {   
        id:1,
        h5:'Stomatološki pregled:',
        h6:'500rsd'
    },
    {   
        id:2,
        h5:'Specijalistički pregled:',
        h6:'500rsd'
    },
    {
        id:3,
        h5:'Lekarsko uverenje:',
        h6:'500rsd'
    },
    {
        id:4,
        h5:'Zalivanje fisura (po zubu):',
        h6:'500rsd'
    },
    {
        id:5,
        h5:'Serijska aplikacija fluorida:',
        h6:'500rsd'
    },
    {
        id:6,
        h5:'Preventivni ispun:',
        h6:'500rsd'
    },
    {
        id:7,
        h5:'Amalgamski ispun na jednoj površini:',
        h6:'500rsd'
    },
    {
        id:8,
        h5:'Amalgamski ispun na jednoj površini kod dece:',
        h6:'500rsd'
    },
    {
        id:9,
        h5:'Amalgamski ispun na dve površine:',
        h6:'500rsd'
    },
    {
        id:10,
        h5:'Amalgamski ispun na tri površine:',
        h6:'500rsd'
    },
    {
        id:11,
        h5:'Glasjonomerni ispun kod dece:',
        h6:'500rsd'
    },
    {
        id:12,
        h5:'Kompozitni ispun na mlečnim zubima:',
        h6:'500rsd'
    },
    {
        id:13,
        h5:'Kompozitni ispun na bočnim zubima I klasa:',
        h6:'500rsd'
    },
    {
        id:14,
        h5:'Kompozitni ispun na bočnim zubima II klasa:',
        h6:'500rsd'
    },
    {
        id:15,
        h5:'Kompozitni ispun na bočnim zubima III klasa:',
        h6:'500rsd'
    },
    {
        id:16,
        h5:'Terapija dubokog karijesa :',
        h6:'500rsd'
    },
    {
        id:17,
        h5:'Prva pomoć kod zubobolje:',
        h6:'500rsd'
    },
    {   
        id:18,
        h5:'Lokalna aplikacija leka :',
        h6:'500rsd'
    },
    {   
        id:19,
        h5:'Vitalna amputacija:',
        h6:'500rsd'
    },
    {
        id:20,
        h5:'Mortalna amputacija pulpe mlečnih zuba:',
        h6:'500rsd'
    },
    {
        id:21,
        h5:'Interseansno medikamentozno kanalno punjenje:',
        h6:'500rsd'
    },
    {
        id:22,
        h5:'Lečenje kanala korena:',
        h6:'500rsd'
    },
    {
        id:23,
        h5:'Retretman kanala korena:',
        h6:'500rsd'
    },
    {
        id:24,
        h5:'Primena MTA u endodonciji:',
        h6:'500rsd'
    },
    {
        id:25,
        h5:'Prva pomoć kod povreda:',
        h6:'500rsd'
    },
    {
        id:26,
        h5:'Nadogradnja frakturiranog zuba:',
        h6:'500rsd'
    },
    {
        id:27,
        h5:'Kompozitni inlej:',
        h6:'500rsd'
    },
    {
        id:28,
        h5:'Terapija rasklaćenog zuba,splintiranje:',
        h6:'500rsd'
    },
    {
        id:29,
        h5:'Izbeljivanje zuba obe vilice:',
        h6:'500rsd'
    },
    {
        id:30,
        h5:'Izbeljivanje avitalnih zuba :',
        h6:'500rsd'
    },
    {
        id:31,
        h5:'Lasersko izbeljivanje zuba:',
        h6:'500rsd'
    },
    {
        id:32,
        h5:'Uklanjanje krunice:',
        h6:'500rsd'
    },
    {
        id:33,
        h5:'Cementiranje stare krunice:',
        h6:'500rsd'
    },
    {
        id:34,
        h5:'Funkcijska analiza okluzije:',
        h6:'500rsd'
    },
    {   
        id:35,
        h5:'Parcijalna akrilatna proteza:',
        h6:'500rsd'
    },
    {   
        id:36,
        h5:'Totalna proteza:',
        h6:'500rsd'
    },
    {
        id:37,
        h5:'Totalna proteza sa metalnom bazom:',
        h6:'500rsd'
    },
    {
        id:38,
        h5:'Parcijalna skeletirana proteza (klasična):',
        h6:'500rsd'
    },
    {
        id:39,
        h5:'Parcijalna skeletirana proteza sa atečmenima:',
        h6:'500rsd'
    },
    {
        id:40,
        h5:'Imedijatna totalna proteza:',
        h6:'500rsd'
    },
    {
        id:41,
        h5:'Reparatura proteze - prelom ploče:',
        h6:'500rsd'
    },
    {
        id:42,
        h5:'Dodatak zuba u protezi:',
        h6:'500rsd'
    },
    {
        id:43,
        h5:'Dodatak kukice u protezi:',
        h6:'500rsd'
    },
    {
        id:44,
        h5:'Podlaganje proteze direktno - hladnovezujući akrilat:',
        h6:'500rsd'
    },
    {
        id:45,
        h5:'Podlaganje proteze indirektno:',
        h6:'500rsd'
    },
    {
        id:46,
        h5:'Podlaganje proteze sa mekom podlogom:',
        h6:'500rsd'
    },
    {
        id:47,
        h5:'Okluzalni stabilizacioni splint (Mičigen):',
        h6:'500rsd'
    },
    {
        id:48,
        h5:'Logan kočić:',
        h6:'500rsd'
    },
    {
        id:49,
        h5:'Fiberglas kočić:',
        h6:'500rsd'
    },
    {
        id:50,
        h5:'Livena nadogradnja:',
        h6:'500rsd'
    },
    {
        id:51,
        h5:'Privremena krunica:',
        h6:'500rsd'
    },
    {   
        id:52,
        h5:'Fasetirana krunica:',
        h6:'500rsd'
    },
    {   
        id:53,
        h5:'Metalokeramička krunica:',
        h6:'500rsd'
    },
    {
        id:54,
        h5:'Bezmetalna kruna - Circonium Full anatomic:',
        h6:'500rsd'
    },
    {
        id:55,
        h5:'Bezmetalna kruna - Circonium - keramika:',
        h6:'500rsd'
    },
    {
        id:56,
        h5:'Bezmetalna kruna - Litiumsilikat:',
        h6:'500rsd'
    },
    {
        id:57,
        h5:'Metalokeramička krunica na implantu:',
        h6:'500rsd'
    },
    {
        id:58,
        h5:'Bezmetalna kruna - Circonium Full anatomic - na implantu:',
        h6:'500rsd'
    },
    {
        id:59,
        h5:'Bezmetalna kruna - Circonium - keramika,cut-back - na implantu:',
        h6:'500rsd'
    },
    {
        id:60,
        h5:'Bezmetalna kruna - Litiumsilikat - na implantu:',
        h6:'500rsd'
    },
    {
        id:61,
        h5:'Teleskop krunica:',
        h6:'500rsd'
    },
    {
        id:62,
        h5:'Fabrička suprastruktura prava i pod uglom:',
        h6:'500rsd'
    },
    {
        id:63,
        h5:'Fabrička suprastruktura prava i pod uglom - estetska:',
        h6:'500rsd'
    },
    {
        id:64,
        h5:'Individualna suprastruktura:',
        h6:'500rsd'
    },
    {
        id:65,
        h5:'Sistem lokator Bredent - po komadu:',
        h6:'500rsd'
    },
    {
        id:66,
        h5:'Skeletirana proteza na lokatorima:',
        h6:'500rsd'
    },
    {
        id:67,
        h5:'Sistem jednostranog atečmena Bredent:',
        h6:'500rsd'
    },
    {
        id:68,
        h5:'Fasete - kompozitne:',
        h6:'500rsd'
    },
    {   
        id:69,
        h5:'Fasete - keramičke:',
        h6:'500rsd'
    },
    {   
        id:70,
        h5:'Inlej / onlej (keramički):',
        h6:'500rsd'
    },
    {
        id:71,
        h5:'Izrada suprastrukture na implantima - metalkeramika:',
        h6:'500rsd'
    },
    {
        id:72,
        h5:'Izrada suprastrukture na implantima - keramika:',
        h6:'500rsd'
    },
    {
        id:73,
        h5:'Hirurški stent:',
        h6:'500rsd'
    },
    {
        id:74,
        h5:'Augmentacija maksilarnog sinusa - sinus lift:',
        h6:'500rsd'
    },
    {
        id:75,
        h5:'Indirektni sinus lift:',
        h6:'500rsd'
    },
    {
        id:76,
        h5:'Ugradnja zamenika za kost:',
        h6:'500rsd'
    },
    {
        id:77,
        h5:'Ugradnja resorptivne membrane:',
        h6:'500rsd'
    },
    {
        id:78,
        h5:'Ugradnja implanta:',
        h6:'500rsd'
    },
    {
        id:79,
        h5:'PRF - membrana:',
        h6:'500rsd'
    },
    {
        id:80,
        h5:'Uklanjanje konaca:',
        h6:'500rsd'
    },
    {
        id:81,
        h5:'Uklanjanje supragingivalnog zubnog kamenca:',
        h6:'500rsd'
    },
    {
        id:82,
        h5:'Obrada parodontalnog džepa po zubu:',
        h6:'500rsd'
    },
    {
        id:83,
        h5:'Drenaža parodontalnog apscesa:',
        h6:'500rsd'
    },
    {
        id:84,
        h5:'Smanjenje osetljivosti korenova zuba (po zubu):',
        h6:'500rsd'
    },
    {
        id:85,
        h5:'Gingivektomija i gingivoplastika (po zubu) laserom:',
        h6:'500rsd'
    },
    {   
        id:86,
        h5:'Modifikovana Widman-ova režanj operacija u lečenju parodontopatije (po zubu):',
        h6:'500rsd'
    },
    {   
        id:87,
        h5:'Osteoplastika i osteotomija u terapiji obolelih od parodontopatije (po zubu):',
        h6:'500rsd'
    },
    {
        id:88,
        h5:'Primena transplantata vezivnog tkiva i periosta u lečenju parodontopatije (po zubu):',
        h6:'500rsd'
    },
    {
        id:89,
        h5:'Produženje kliničke krune zuba (po zubu):',
        h6:'500rsd'
    },
    {
        id:90,
        h5:'Letaralno pomeren režanj:',
        h6:'500rsd'
    },
    {
        id:91,
        h5:'Kauzalna terapija parodontopatije - po kvadrantu:',
        h6:'500rsd'
    },
    {
        id:92,
        h5:'Hirurško lečenje gingivalne recesije:',
        h6:'500rsd'
    },
    {
        id:93,
        h5:'Uklanjanje supragingivalnog kamenca sa peskiranjem:',
        h6:'500rsd'
    },
    {
        id:94,
        h5:'Lasersko produženje kliničke krune po zubu:',
        h6:'500rsd'
    },
    {
        id:95,
        h5:'Kauzalna terapija parodontopatije po vilici laserom:',
        h6:'500rsd'
    },
    {
        id:96,
        h5:'Laserska gingivektomija (po zubu):',
        h6:'500rsd'
    },
    {
        id:97,
        h5:'Korišćenje lasera na mekim i tvrdim tkivima:',
        h6:'500rsd'
    },
    {
        id:98,
        h5:'Noćni štitnik za bruksiste - folija:',
        h6:'500rsd'
    },
    {
        id:99,
        h5:'Uzimanje otisaka i digitalna analiza iz ortodontskih razloga:',
        h6:'500rsd'
    },
    {
        id:100,
        h5:'Izrada i analiza studijskog modela:',
        h6:'500rsd'
    },
    {
        id:101,
        h5:'Aktivni pokretni ortodontski aparat:',
        h6:'500rsd'
    },
    {
        id:102,
        h5:'Funkcionalni ortodontski aparat - Twin block:',
        h6:'500rsd'
    },
    {
        id:103,
        h5:'Reparatura ortodontskog aparata sa otiskom:',
        h6:'500rsd'
    },
    {
        id:104,
        h5:'Fiksni ortodontski aparat - sa prstenovima i bravicama:',
        h6:'500rsd'
    },
    {
        id:105,
        h5:'Fiksni ortodontski aparat - segmentirani luk:',
        h6:'500rsd'
    },
    {
        id:106,
        h5:'Zamena bravice u fiksnom aparatu:',
        h6:'500rsd'
    },
    {
        id:107,
        h5:'Palatinalni ili lingvalni aparat (Quad helix...):',
        h6:'500rsd'
    },
    {   
        id:108,
        h5:'Folija za ortodontsko pomeranje zuba sa rekonstrukcijom:',
        h6:'500rsd'
    },
    {   
        id:109,
        h5:'Fiksni retencioni aparat - ritejner:',
        h6:'500rsd'
    },
    {
        id:110,
        h5:'Kontrola ortodontske terapije:',
        h6:'500rsd'
    },
    {
        id:111,
        h5:'Clear align folija:',
        h6:'500rsd'
    },
    {
        id:112,
        h5:'Retenciona folija:',
        h6:'500rsd'
    },
    {
        id:113,
        h5:'Trainer - Myobrace:',
        h6:'500rsd'
    },
    {
        id:114,
        h5:'Replantacija stalnih zuba:',
        h6:'500rsd'
    },
    {
        id:115,
        h5:'Intraoralna incizija apscesa:',
        h6:'500rsd'
    },
    {
        id:116,
        h5:'Resekcija jednokorenih zuba:',
        h6:'500rsd'
    },
    {
        id:117,
        h5:'Resekcija gornjih dvokorenih zuba:',
        h6:'500rsd'
    },
    {
        id:118,
        h5:'Hemisekcija i disekcija zuba:',
        h6:'500rsd'
    },
    {
        id:119,
        h5:'Zaustavljanje krvarenja:',
        h6:'500rsd'
    },
    {
        id:120,
        h5:'Zaustavljanje krvarenja hirurškim putem:',
        h6:'500rsd'
    },
    {
        id:121,
        h5:'Vađenje mlečnih zuba:',
        h6:'500rsd'
    },
    {
        id:122,
        h5:'Vađenje stalnih zuba:',
        h6:'500rsd'
    },
    {
        id:123,
        h5:'Komplikovano vađenje zuba:',
        h6:'500rsd'
    },
    {
        id:124,
        h5:'Hirurško vađenje zuba:',
        h6:'500rsd'
    },
    {
        id:125,
        h5:'Hirurško vađenje impaktiranih umnjaka:',
        h6:'500rsd'
    },
    {
        id:126,
        h5:'Hirurško vađenje impaktiranih očnjaka:',
        h6:'500rsd'
    },
    {
        id:127,
        h5:'Primarna plastika OAK - zatvaranje sinusa:',
        h6:'500rsd'
    },
    {
        id:128,
        h5:'Hirurška terapija zuba u nicanju (cirkumcizija):',
        h6:'500rsd'
    },
    {
        id:129,
        h5:'Hirurška terapija zuba u nicanju (denudacija):',
        h6:'500rsd'
    },
    {
        id:130,
        h5:'Uklanjanje mukoznih cista laserom:',
        h6:'500rsd'
    },
    {
        id:131,
        h5:'Uklanjanje većih viličnih cista:',
        h6:'500rsd'
    },
    {
        id:132,
        h5:'Plastika plika i frenuluma laserom:',
        h6:'500rsd'
    },
    {
        id:133,
        h5:'Vestibuloplastika (po vilici):',
        h6:'500rsd'
    },
    {
        id:134,
        h5:'Nivelacija alveolarnog grebena (po kvadrantu):',
        h6:'500rsd'
    },
    {
        id:135,
        h5:'Lokalna nadogradnja grebena:',
        h6:'500rsd'
    },
]

function ContactPrice() { 
  return (
    <div className='price-container'>
        <div className='price-box'>
            <h1>Cenovnik</h1>



            <div className='price-list'>
            <h2>Preventivna stomatologija:</h2>
          { priceArray.slice(0,6).map((price,i)=>{
            return (
            <div key={i}  className='price-array'>
            <h5>{price.h5}</h5> 
            <h6>{price.h6}</h6>
            </div>
        )
           })}
           </div>



           <div className='price-list'>
            <h2>Bolesti zuba:</h2>
          { priceArray.slice(6,28).map((price,i)=>{
            return (
            <div key={price.id}  className='price-array'>
            <h5>{price.h5}</h5> 
            <h6>{price.h6}</h6>
            </div>
        )
           })}
           </div>



           <div className='price-list'>
            <h2>Estetska stomatologija:</h2>
          { priceArray.slice(28,31).map((price,i)=>{
            return (
            <div key={price.id}  className='price-array'>
            <h5>{price.h5}</h5> 
            <h6>{price.h6}</h6>
            </div>
        )
           })}
           </div>
           


           <div className='price-list'>
            <h2>Protetika:</h2>
          { priceArray.slice(31,70).map((price,i)=>{
            return (
            <div key={price.id}  className='price-array'>
            <h5>{price.h5}</h5> 
            <h6>{price.h6}</h6>
            </div>
        )
           })}
           </div>

           <div className='price-list'>
            <h2>Implantologija:</h2>
          { priceArray.slice(70,80).map((price,i)=>{
            return (
            <div key={price.id}  className='price-array'>
            <h5>{price.h5}</h5> 
            <h6>{price.h6}</h6>
            </div>
        )
           })}
           </div>

           <div className='price-list'>
            <h2>Parodontologija:</h2>
          { priceArray.slice(80,97).map((price,i)=>{
            return (
            <div key={price.id}  className='price-array'>
            <h5>{price.h5}</h5> 
            <h6>{price.h6}</h6>
            </div>
        )
           })}
           </div>


           <div className='price-list'>
            <h2>Ortodoncija:</h2>
          { priceArray.slice(97,113).map((price,i)=>{
            return (
            <div key={price.id}  className='price-array'>
            <h5>{price.h5}</h5> 
            <h6>{price.h6}</h6>
            </div>
        )
           })}
           </div>



           <div className='price-list'>
            <h2>Oralna hirurgija:</h2>
          { priceArray.slice(113,135).map((price,i)=>{
            return (
            <div key={price.id}  className='price-array'>
            <h5>{price.h5}</h5> 
            <h6>{price.h6}</h6>
            </div>
        )
           })}
           </div>

           <span>*sve cene su informativnog karaktera i podložne su promenama</span>
        </div>
       
    </div>
  )
}

export default ContactPrice