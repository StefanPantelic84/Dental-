import React from "react";
import { useInView } from "react-intersection-observer";

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
      <div className="firstvisitone-img"></div>
    </div>
  );
}

export default FirstVisitOne;
