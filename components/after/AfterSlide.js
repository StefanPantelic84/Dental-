import React from "react";
import { useEffect } from "react";

function AfterSlide() {
  const hideFrontImg = () => {
    document.querySelector(".slide-front").style.left = "100%";
    document.querySelector(".slide-back").style.filter = "brightness(100%)";
  };
  const showFrontImg = () => {
    document.querySelector(".slide-front").style.left = "10%";
    document.querySelector(".slide-back").style.filter = "brightness(30%)";
  };
  const hideFrontImg2 = () => {
    document.querySelector(".slide2-front").style.left = "100%";
    document.querySelector(".slide2-back").style.filter = "brightness(100%)";
  };
  const showFrontImg2 = () => {
    document.querySelector(".slide2-front").style.left = "10%";
    document.querySelector(".slide2-back").style.filter = "brightness(30%)";
  };
  const hideFrontImg3 = () => {
    document.querySelector(".slide3-front").style.left = "100%";
    document.querySelector(".slide3-back").style.filter = "brightness(100%)";
  };
  const showFrontImg3 = () => {
    document.querySelector(".slide3-front").style.left = "10%";
    document.querySelector(".slide3-back").style.filter = "brightness(30%)";
  };
  const hideFrontImg4 = () => {
    document.querySelector(".slide4-front").style.left = "100%";
    document.querySelector(".slide4-back").style.filter = "brightness(100%)";
  };
  const showFrontImg4 = () => {
    document.querySelector(".slide4-front").style.left = "10%";
    document.querySelector(".slide4-back").style.filter = "brightness(30%)";
  };
  const hideFrontImg5 = () => {
    document.querySelector(".slide5-front").style.left = "100%";
    document.querySelector(".slide5-back").style.filter = "brightness(100%)";
  };
  const showFrontImg5 = () => {
    document.querySelector(".slide5-front").style.left = "10%";
    document.querySelector(".slide5-back").style.filter = "brightness(30%)";
  };

  const allFunctions = () => {
    showFrontImg();
    showFrontImg2();
    showFrontImg3();
    showFrontImg4();
    showFrontImg5();
  };
  useEffect(() => {
    window.addEventListener("resize", allFunctions);
    return () => {
      window.removeEventListener("resize", allFunctions);
    };
  }, []);

  return (
    <div>
      <div className="afterslide-title">
        <p>Na??i Radovi:</p>
      </div>
      <div className="afterslide-container">
        <div className="afterslide-holder">
          <div className="slide-right" onClick={hideFrontImg}>
            {"???"}
          </div>
          <div className="slide-left" onClick={showFrontImg}>
            {"???"}
          </div>
          <div className="slide-back"> </div>
          <div className="slide-front"> </div>
        </div>
        <div className="afterslide-text">
          <h1>Bezmetalna keramika</h1>
          <p>
            Bezmetalna keramika je vrsta materijala koja se koristi u
            stomatologiji za izradu bezmetalnih krunica, mostova i drugih vrsta
            proteza. Ona je izra??ena od kerami??ke supstance koja je izuzetno
            tvrda i izdr??ljiva, ??to je ??ini idealnom za upotrebu u
            stomatologiji.
          </p>
        </div>
      </div>

      <div className="afterslide2-container">
        <div className="afterslide2-text">
          <h1>Bezmetalne krunice</h1>
          <p>
            {" "}
            Bezmetalne krunice su vrsta proteze koja se koristi u stomatologiji
            za popravku ili zamenu zuba. One su napravljene od keramike ili
            polimera i koriste se kada nema dovoljno zdravog zuba da bi se
            postavila tradicionalna metalna krunica. Bezmetalne krunice su
            estetski prihvatljivije jer se ne vide na zubima kao ??to se metalne
            krunice vide.
          </p>
        </div>
        <div className="afterslide2-holder">
          <div className="slide-right2" onClick={hideFrontImg2}>
            {"???"}
          </div>
          <div className="slide-left2" onClick={showFrontImg2}>
            {"???"}
          </div>
          <div className="slide2-back"></div>
          <div className="slide2-front"></div>
        </div>
      </div>

      <div className="afterslide3-container">
        <div className="afterslide3-holder">
          <div className="slide-right3" onClick={hideFrontImg3}>
            {"???"}
          </div>
          <div className="slide-left3" onClick={showFrontImg3}>
            {"???"}
          </div>
          <div className="slide3-back"> </div>
          <div className="slide3-front"> </div>
        </div>
        <div className="afterslide3-text">
          <h1>Metalokeram??ka krunica</h1>
          <p>
            Metalokerami??ka krunica je vrsta krunice koja se koristi u
            stomatologiji za popravku zuba. To je hirur??ki zahvat u kome se zub
            zamenjuje sa krunicom od metala i keramike. Metalokerami??ka krunica
            je ??vrsta i otporna na optere??enja, ??to ??ini da je idealna za
            popravku zuba u najoptere??enijim delovima vilice. Ona tako??e izgleda
            estetski prihvatljivo.
          </p>
        </div>
      </div>

      <div className="afterslide4-container">
        <div className="afterslide4-text">
          <h1>Rekonstrukcija osmeha</h1>
          <p>
            Rekonstrukcija osmeha metalokerami??kim krunicama mo??e dati odli??ne
            rezultate i pomo??i osobi da vrati prirodni i lep izgled osmeha.
            Me??utim, potrebno je voditi ra??una o pravilnoj oralnoj higijeni i
            redovnim posetama stomatologu kako bi se odr??ao zdrav i lep osmeh.
          </p>
        </div>
        <div className="afterslide4-holder">
          <div className="slide-right4" onClick={hideFrontImg4}>
            {"???"}
          </div>
          <div className="slide-left4" onClick={showFrontImg4}>
            {"???"}
          </div>
          <div className="slide4-back"></div>
          <div className="slide4-front"></div>
        </div>
      </div>

      <div className="afterslide5-container">
        <div className="afterslide5-holder">
          <div className="slide-right5" onClick={hideFrontImg5}>
            {"???"}
          </div>
          <div className="slide-left5" onClick={showFrontImg5}>
            {"???"}
          </div>
          <div className="slide5-back"> </div>
          <div className="slide5-front"> </div>
        </div>
        <div className="afterslide5-text">
          <h1>Cirkonijum keramika</h1>
          <p>
            Cirkonijum keramika je vrsta keramike koja se koristi u
            stomatologiji za izradu razli??itih vrsta zubnih nadoknada.Cirkonijum
            keramika je odli??na zbog svoje ??vrsto??e, otpornosti na habanje i
            estetskih kvaliteta. Ona je tako??e otporna na promene temperature.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AfterSlide;
