import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

function FirstVisitOne() {
  const ref01 = useInView({ triggerOnce: true });

  return (
    <div className="firstvisitone-container">
      <div className="firstvisitone-text">
        <div className="firstvisitone-title">
          <h1
            ref={ref01.ref}
            className={ref01.inView ? "number01" : "bignumber01"}
          >
            01
          </h1>
          <h6>Dobro dosli</h6>
        </div>
        <p>
          Ovde vas dočekujemo sa osmehom.Od trenutka kada udjete želimo da se
          osećate kao da ovde pripadate.Uživajte u udobnosti, opustite se uz
          umirujuću muziku.Smatramo da doživljaj kod stomatologa treba da bude
          što opušteniji.
        </p>
      </div>
      <div className="firstvisitone-img">
      <Image 
          src='/firstOne.jpg'
          alt='zubarska ordinacija i stomatolog'
          width={1200}
          height={1199}
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

export default FirstVisitOne;
