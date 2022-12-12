import React from 'react'
import { useRef,useEffect, useState } from 'react';

function Testimonials() {

    const myRef = useRef();

    const [isVisible, setIsVisible] = useState(0);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting == true){
          setIsVisible(isVisible + 1)
        }
      });
      observer.observe(myRef.current);
    }, []);

  return (
    <div ref={myRef} className='testimonials-container'>
        {isVisible > 0 && <div className='testimonials-text'>
            <div className='stars'><h1>Ljubazne reci nasih pacijenata</h1><p>1,000 + 5-star review</p></div>
            <div className='white'><p>Za razliku od drugih stomatologa Milosevic vas vodi tamo gde ste, a ne da ga kažnjavate ili sramotite. Ne mogu ih dovoljno visoko preporučiti. Bićete dobro zbrinuti!</p><div>--Suzzan P.</div></div>
            <div className='gold' >Zadovoljstvo je ići kod zubara u Milosevic Dental. Kancelarija je prelepa, oseća se mirno i čisto. Osoblje ima optimističan stav. Dr Milosevic je tako ljubazan i iskren</div>
            
            </div>}
            <div className='green'>Sve u vezi ove kancelarije je odlično! Osoblje je ljubazno i pažljivo. Pomoćnici čine da se osećate prijatno. Verovatno najbolji zubar kojeg sam ikada video. Predivno mesto! Vonderful staff! Divni doktori!</div>
    </div>
  )
}

export default Testimonials