import React from "react";
import { useInView } from "react-intersection-observer";

function DiffFour() {
  const diff04 = useInView({ triggerOnce: true });
  return (
    <div className="difffour-container">
      <div className="difffour-img"></div>
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
