import React from 'react'

const priceArray = [
    {
        h5:'neka cena ovde:',
        h6:'500rsd'
    },
    {
        h5:'neka cena ovde:',
        h6:'500rsd'
    },
    {
        h5:'neka cena ovde:',
        h6:'500rsd'
    },
    {
        h5:'neka cena ovde:',
        h6:'500rsd'
    },
    {
        h5:'neka cena ovde:',
        h6:'500rsd'
    },
    {
        h5:'neka cena ovde:',
        h6:'500rsd'
    },
    {
        h5:'neka cena ovde:',
        h6:'500rsd'
    },
    {
        h5:'neka cena ovde:',
        h6:'500rsd'
    }
]

function ContactPrice() {
  return (
    <div className='price-container'>
        <div className='price-box'>
            <h1>Cenovnik</h1>



            <div className='price-list'>
            <h2>KRUNICE:</h2>
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
            <h2>IMPLANTI:</h2>
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
            <h2>PROTETIKA:</h2>
          { priceArray.slice(0,4).map((price,i)=>{
            return (
            <div key={i}  className='price-array'>
            <h5>{price.h5}</h5> 
            <h6>{price.h6}</h6>
            </div>
        )
           })}
           </div>
           



        </div>
    </div>
  )
}

export default ContactPrice