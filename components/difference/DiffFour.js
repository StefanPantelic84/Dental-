import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

function DiffFour() {
  const diff04 = useInView({ triggerOnce: true });
  return (
    <div className="difffour-container">
      <div className="difffour-img">
      <Image 
          src='/diffFour.webp'
          alt='krunice kod stomatologa osmeh'
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
      <div className="difffour-text">
        <div className="difffour-title">
          <h1
            ref={diff04.ref}
            className={diff04.inView ? "numberD04" : "bignumberD04"}
          >
            04
          </h1>
          <h6>VERUJEMO U ESTETSKU STOMATOLOGIJU</h6>
        </div>
        <p>
          MISLIMO DA JE STOMATOLOGIJA PRELEPA, TOKOM LEČENJA IMAMO UMETNIČKI PRISTUP.
          KORISTEĆI SAVREMENU TEHNOLOGIJU I TEHNIKU, ISPORUČUJEMO
          IZVRSTAN, ZDRAV, DUGOTRAJAN, LEP OSMEH. ŽELIMO DA VAM
          POMOGNEMO DA SE POKAŽETE U SVOM NAJBOLJEM IZDANJU.
        </p>
      </div>
    </div>
  );
}

export default DiffFour;
