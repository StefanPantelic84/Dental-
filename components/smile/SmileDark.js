import React from "react";
import { useInView } from "react-intersection-observer";

function SmileDark() {
  const darkB = useInView({ triggerOnce: true });

  return (
    <div className="smiledark-container">
      <div className="smiledark-topimg"></div>
      <div className="smiledark-text">
        <p>
          "POSEĆUJEM MILOŠEVIĆ/DENTAL ORDINACIJU POSLEDNJE 4 GODINE I TO JE
          NAJBOLJA PROMJENA KOJU SAM IKADA NAPRAVILA U POGLEDU MOG ZDRAVLJA.
          UVEK SAM MRZELA SVOJ OSMEH DO TAČKE GDE BIH IZBEGAVALA DA SE SMEJEM DA
          MI SE VIDE ZUBI. DR. MILICA JE PRVI STOMATOLOG U KOJEG SAM IMALA DOVOLJNO
          POVERENJA DA NASTAVIM KOZMETIČKI RAD. URADILA MI JE PRELEPE KRUNICE
          NA ZUBIMA I SADA IMAM „HOLIVUDSKI“ OSMEH. STALNO DOBIJAM KOMPLIMENTE
          KAKO JE MOJ OSMEH LEP. CEO TIM JE TAKO LJUBAZAN I BRIŽAN.
          SVIMA BI PREPORUČIO OVU ORDINACIJU!"
          <span ref={darkB.ref} className={darkB.inView ? "span-b" : "span-B"}>
            <br></br>-Ivona L.
          </span>
        </p>
      </div>
      <div className="smiledark-botimg"></div>
    </div>
  );
}

export default SmileDark;
