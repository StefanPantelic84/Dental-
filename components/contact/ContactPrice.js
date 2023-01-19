import React from 'react'

const priceArray = [
    {   
        id:1,
        h5:'Stomatološki pregled:',
        h6:'besplatan'
    },
    {   
        id:2,
        h5:'Specijalistički pregled:',
        h6:'2.000rsd'
    },
    {
        id:4,
        h5:'Zalivanje fisura :',
        h6:'1.500rsd'
    },
    {
        id:4,
        h5:'Fluorizacija zuba po vilici',
        h6:'3.000rsd'
    },
    {
        id:5,
        h5:'Plomba:',
        h6:'3.300rsd'
    },
    {
        id:6,
        h5:'Lečenje zuba (1,2,3,4,5):',
        h6:'5.000rsd'
    },
    {
        id:7,
        h5:'Lečenje zuba (6,7,8):',
        h6:'5.700rsd'
    },
    {
        id:8,
        h5:'Aplikacija leka:',
        h6:'2.000rsd'
    },
    {
        id:9,
        h5:'Prva pomoć(jak bol):',
        h6:'2.000rsd'
    },
    {
        id:10,
        h5:'Pulpotomija + plomba:',
        h6:'3.500rsd'
    },
    {
        id:11,
        h5:'Vađenje mlečnog zuba:',
        h6:'1.500rsd'
    },
    {
        id:12,
        h5:'Rutinsko vađenje zuba:',
        h6:'2.500rsd'
    },
    {
        id:13,
        h5:'Komplikovano vađenje zuba:',
        h6:'3.500rsd'
    },
    {
        id:14,
        h5:'Hirurško vađenje umnjaka:',
        h6:'11.700rsd'
    },
    {
        id:15,
        h5:'Apikotomija (resekcija korena):',
        h6:'11.700rsd'
    },
    {
        id:16,
        h5:'Ord. izbeljivanje zuba:',
        h6:'14.200rsd'
    },
    {
        id:17,
        h5:'Izbeljivanje avitalnih zuba po tretmanu:',
        h6:'4.000rsd'
    },
    {   
        id:18,
        h5:'Kompozitna faseta:',
        h6:'5.000rsd'
    },
    {   
        id:19,
        h5:'Keramicka faseta:',
        h6:'23.500rsd'
    },
    {
        id:20,
        h5:'Krunica od cirkonijum keramike:',
        h6:'21.000rsd'
    },
    {
        id:21,
        h5:'Cirkon kruna CAD CAM:',
        h6:'17.700rsd'
    },
    {
        id:22,
        h5:'Litijum disilikatna kruna (staklo keramika):',
        h6:'23.500rsd'
    },
    {
        id:23,
        h5:'Metalokeramička krunica V9:',
        h6:'11.700rsd'
    },
    {
        id:24,
        h5:'Metalokeramička krunica V13:',
        h6:'12.900rsd'
    },
    {
        id:25,
        h5:'Fiberglass nadogradnja:',
        h6:'3.600rsd'
    },
    {
        id:26,
        h5:'Livena nadogradnja:',
        h6:'4.700rsd'
    },
    {
        id:27,
        h5:'Parcijalna akril. proteza:',
        h6:'25.800rsd'
    },
    {
        id:28,
        h5:'Totalna akril. proteza:',
        h6:'25.800rsd'
    },
    {
        id:29,
        h5:'Vizil proteza:',
        h6:'41.000rsd'
    },
    {
        id:30,
        h5:'Vizil proteza sa parom atečmena:',
        h6:'58.800rsd'
    },
    {
        id:31,
        h5:'Reparatura proteze:',
        h6:'3.000rsd'
    },
    {
        id:32,
        h5:'Žabica:',
        h6:'9.000rsd'
    },
    {
        id:33,
        h5:'Metalokeramicka kruna na implantu sa suprastrukturom:',
        h6:'28.000rsd'
    },
    {
        id:34,
        h5:'Cirkon kruna CAD CAM na implantu sa suprastrukturom:',
        h6:'33.000rsd'
    },
    {   
        id:35,
        h5:'Krunica od cirkonijum keramike na implantu sa suprastrukturom:',
        h6:'35.500rsd'
    },
    {   
        id:36,
        h5:'Ugradnja implantata Zimmer:',
        h6:'59.000rsd'
    },
    {
        id:37,
        h5:'Ugradnja implantata C-Tech:',
        h6:'41.500rsd'
    },
    {
        id:38,
        h5:'Ultrazvučno uklanjanje kamenca:',
        h6:'2.600rsd'
    },
    {
        id:39,
        h5:'Kiretaža parodont. džepa:',
        h6:'1.000rsd'
    },
    {
        id:40,
        h5:'Imedijatna totalna proteza:',
        h6:'500rsd'
    },
    {
        id:41,
        h5:'Splint za bruksizam:',
        h6:'8.000rsd'
    },
    {
        id:42,
        h5:'Fiksni ortodontski apparat – po vilici:',
        h6:'76.500rsd'
    },
    {
        id:43,
        h5:'Fiksni ortodontski apparat, estetske bravice – po vilici:',
        h6:'88.000rsd'
    },
    {
        id:44,
        h5:'Retenciona folija:',
        h6:'6.000rsd'
    },
   
]

function ContactPrice() { 
  return (
    <div className='price-container'>
        <div className='price-box'>
            <h1>Cenovnik</h1>



            <div className='price-list'>
            <h2>Preventivna stomatologija:</h2>
          { priceArray.slice(0,4).map((price,i)=>{
            return (
            <div key={i}  className='price-array'>
            <h5>{price.h5}</h5> 
            <h6>{price.h6}</h6>
            </div>
        )
           })}
           </div>



           <div className='price-list'>
            <h2>Konzervativna stomatologija:</h2>
          { priceArray.slice(4,10).map((price,i)=>{
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
          { priceArray.slice(10,15).map((price,i)=>{
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
          { priceArray.slice(15,19).map((price,i)=>{
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
          { priceArray.slice(19,35).map((price,i)=>{
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
          { priceArray.slice(35,37).map((price,i)=>{
            return (
            <div key={price.id}  className='price-array'>
            <h5>{price.h5}</h5> 
            <h6>{price.h6}</h6>
            </div>
        )
           })}
           </div>


           <div className='price-list'>
            <h2>Parodontologija::</h2>
          { priceArray.slice(37,39).map((price,i)=>{
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
          { priceArray.slice(39,43).map((price,i)=>{
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