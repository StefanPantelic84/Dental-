import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

function FirstVisitThree() {
  const ref03 = useInView({ triggerOnce: true });

  return (
    <div className="firstvisitthree-container">
      <div className="firstvisitthree-text">
        <div className="firstvisitthree-title">
          <h1
            ref={ref03.ref}
            className={ref03.inView ? "number03" : "bignumber03"}
          >
            03
          </h1>
          <h6>ODGOVORI NA VAŠA PITANJA</h6>
        </div>
        <p>
          ČVRSTO VERUJEMO DA JE EDUKACIJA TOKOM VAŠE POSETE NAJBOLJI NAČIN DA
          POMOGNEMO U POBOLJŠANJU STANDARDA STOMATOLOGIJE U NAŠOJ ZAJEDNICI.
          OBOŽAVAMO DA POSTAVLJAMO PITANJA I PODSTIČEMO VAS DA UČINITE ISTO KAKO
          BISTE NAM POMOGLI DA OPTIMIZUJEMO VAŠE ORALNO ZDRAVLJE.
        </p> 
      </div>
      <div className="firstvisitthree-img">
      <Image 
          src='/firstThree.webp'
          alt='keramicke krunice osmeh'
          width={800}
          height={800}
          quality={100}
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
    </div>
  );
}

export default FirstVisitThree;
