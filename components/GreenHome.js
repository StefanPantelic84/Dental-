import React from 'react'
import { useRef,useEffect, useState } from 'react';


function GreenHome() {

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
    <div ref={myRef}> 
        {isVisible > 0 && <div className ="green-container">
            <nav className='green-border'>
                <section className='green-text'>
                <h1>Stomatologija u Pravim Rukama</h1>
                <h2>Изузетна брига за све узрасте
                Naš tim je strastven u izgradnji doživotnih odnosa kroz pozitivna iskustva, uključujući:
                </h2>
                <ul>
                    <li>Otvorene cene</li>
                    <li>Garancija na rad</li>
                    <li>Besplatan pregled</li>
                </ul>
                <p>"Nasa rec vredi. Obecavamo da cemo uraditi kako Treba
                    na vreme i za pristojnu cenu."
                </p>
                </section>
                <div className='image'></div>
            </nav>
            <div className='circle'></div>
        </div>}
        
    </div>
    )
}

export default GreenHome