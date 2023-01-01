import React from "react";
import { useInView } from "react-intersection-observer"; 

function HomeDark() {
  const firstRef = useInView({ triggerOnce: true });

  return (
    <div className="homedark-dark">
      <div className="homedark-topimg"></div>
      <div className="homedark-container">
        <div className="homedark-text">
          <p>
            "Najbolji deo onoga što radim je kad vidim kako dentalna estetika
            može da transformiše osobu - njeno samopouzdanje, zdravlje i pogled
            na život. Veoma sam ponosna na način na koji moj tim i ja tretiramo
            naše pacijente."
            <span
              ref={firstRef.ref}
              className={firstRef.inView ? "span" : "span-A"}
            >
              <br></br>-Dr.Milošević
            </span>
          </p>
        </div>
      </div>
      <div className="homedark-botimg"></div>
    </div>
  );
}

export default HomeDark;
