import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

function DiffThree() {
  const diff03 = useInView({ triggerOnce: true });
  return (
    <div className="diffthree-container">
      <div className="diffthree-text">
        <div className="diffthree-title">
          <h1
            ref={diff03.ref}
            className={diff03.inView ? "numberD03" : "bignumberD03"}
          >
            03
          </h1>
          <h6>VERUJEMO U KOMFORNOST TOKOM NEGE</h6>
        </div>
        <p>
          POSETA STOMATOLOGU NE TREBA DA ZNAČI NEUDOBNOST I NELAGODNOST. SA
          POGODNOSTIMA KAO ŠTO SU JASTUCI ZA VRAT, VRHUNSKA UDOBNOST,UMIRUJUĆA
          MUZIKA,NEŽAN PRISTUP KAO I NAŠ PROSTOR KOJI JE VEŠTO DIZAJN, SVE JE UČINJENO DA SE OSEĆATE
          SMIRENO I OPUŠTENO.
        </p>
      </div>
      <div className="diffthree-img">
      <Image 
          src='/diffThree.jpg'
          alt='prelep osmeh kod stomatologa'
          width={1200}
          height={1200}
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

export default DiffThree;
