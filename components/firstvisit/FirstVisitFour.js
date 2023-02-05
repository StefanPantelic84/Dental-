import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

function FirstVisitFour() {
  const ref04 = useInView({ triggerOnce: true });
  return (
    <div className="firstvisitfour-container">
      <div className="firstvisitfour-img">
      <Image 
          src='/firstFour.webp'
          alt='popravka zuba'
          width={800}
          height={533}
          quality={80}
          style={{
            position:'absolute',
            top:0,
            left:0,
            width:'100%',
            height:'100%',
           objectFit:'cover',
           objectPosition: '50% 50%'
          }}
        />
      </div>
      <div className="firstvisitfour-text">
        <div className="firstvisitfour-title">
          <h1
            ref={ref04.ref}
            className={ref04.inView ? "number04" : "bignumber04"}
          >
            04
          </h1>
          <h6>DETALJNOST U RADU</h6>
        </div>
        <p>
          POSEBNO JE BITNO OBRATITI PAZNJU NA DETALJE. SVAKI DEO VAŠEG ZUBA JE
          PODJEDNAKO VAŽAN. KOD NAS SE NIŠTA NE PREPUŠTA SLUČAJU. ZAJEDNO SA VAMA
          UVEK ĆEMO PRONAĆI NAJBOLJI PUT ZA OČUVANJE VAŠIH ZUBA.
        </p>
      </div>
    </div>
  );
}

export default FirstVisitFour;
