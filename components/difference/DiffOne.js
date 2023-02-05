import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

function diffone() {
  const diff01 = useInView({ triggerOnce: true });
  return (
    <div className="diffone-container">
      <div className="diffone-text">
        <div className="diffone-title">
          <h1
            ref={diff01.ref}
            className={diff01.inView ? "numberD01" : "bignumberD01"}
          >
            01
          </h1>
          <h6>VERUJEMO DA OD NAS ZASLUŽUJETE SAMO NAJBOLJE</h6>
        </div>
        <p>
          NAŠA POSVEĆENOST RASTU I KONTINUIRANOM UČENJU ZNAČI DA UVEK TRAŽIMO
          NAČINE DA DODAMO NOVE TEHNOLOGIJE,DA RAZVIJEMO NOVE VEŠTINE I DA SE DRŽIMO 
          VIŠEG STANDARDA. PODRŽAVAMO RAZVOJ TEHNOLOGIJE I U KORAK SMO SA NJOM.
        </p>
      </div>
      <div className="diffone-img">
      <Image 
          src='/diffOne.webp'
          alt='osmeh nakon popravke zuba'
          width={1200}
          height={1200}
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
    </div>
  );
}

export default diffone;
