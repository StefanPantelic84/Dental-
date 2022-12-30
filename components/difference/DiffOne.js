import React from "react";
import { useInView } from "react-intersection-observer";

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
      <div className="diffone-img"></div>
    </div>
  );
}

export default diffone;
