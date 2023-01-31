import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

function FirstVisitTwo() {
  const ref02 = useInView({ triggerOnce: true });

  return (
    <div className="firstvisittwo-container">
      <div className="firstvisittwo-img">
      <Image 
          src='/firstTwo.jpg'
          alt='objanjvanje problema stomatologu'
          width={800}
          height={533}
          quality={100}
          style={{
            position:'absolute',
            top:0,
            left:0,
            width:'100%',
            height:'100%',
           objectFit:'cover',
           objectPosition: '85% 50%'
          }}
        />
      </div>
      <div className="firstvisittwo-text">
        <div className="firstvisittwo-title">
          <h1
            ref={ref02.ref}
            className={ref02.inView ? "number02" : "bignumber02"}
          >
            02
          </h1>
          <h6>Upoznavanje</h6>
        </div>
        <p>
          TOKOM VAŠE PRVE POSETE, NAŠ TIM ĆE POČETI SA PROCENOM VAŠEG UKUPNOG
          ORALNOG ZDRAVLJA. DOBIĆETE NAPREDNE DIGITALNE SNIMKE, PARODONTALNU
          PROCENU I STOMATOLOŠKI PREGLED. NA PUTU ĆEMO VAS BOLJE UPOZNATI,
          NAUČITI VAŠE AFINITETE I CILJEVE U LEČENJU, ZA LEP I ZDRAV
          OSMEH.
        </p>
      </div>
    </div>
  );
}

export default FirstVisitTwo;
