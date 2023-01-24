import React from "react";
import { useEffect } from "react";

function AfterSlide() {
  const hideFrontImg = () => {
    document.querySelector(".slide-front").style.left = "100%";
    document.querySelector(".slide-back").style.filter = "brightness(100%)";
    document.querySelector(".slide-left").style.display = "block";
    document.querySelector(".slide-right").style.display = "none";
  };
  const showFrontImg = () => {
    document.querySelector(".slide-front").style.left = "10%";
    document.querySelector(".slide-back").style.filter = "brightness(30%)";
    document.querySelector(".slide-left").style.display = "none";
    document.querySelector(".slide-right").style.display = "block";
  };
  const hideFrontImg2 = () => {
    document.querySelector(".slide2-front").style.left = "100%";
    document.querySelector(".slide2-back").style.filter = "brightness(100%)";
    document.querySelector(".slide-left2").style.display = "block";
    document.querySelector(".slide-right2").style.display = "none";
  };
  const showFrontImg2 = () => {
    document.querySelector(".slide2-front").style.left = "10%";
    document.querySelector(".slide2-back").style.filter = "brightness(30%)";
    document.querySelector(".slide-left2").style.display = "none";
    document.querySelector(".slide-right2").style.display = "block";
  };
  const hideFrontImg3 = () => {
    document.querySelector(".slide3-front").style.left = "100%";
    document.querySelector(".slide3-back").style.filter = "brightness(100%)";
    document.querySelector(".slide-left3").style.display = "block";
    document.querySelector(".slide-right3").style.display = "none";
  };
  const showFrontImg3 = () => {
    document.querySelector(".slide3-front").style.left = "10%";
    document.querySelector(".slide3-back").style.filter = "brightness(30%)";
    document.querySelector(".slide-left3").style.display = "none";
    document.querySelector(".slide-right3").style.display = "block";
  };
  const hideFrontImg4 = () => {
    document.querySelector(".slide4-front").style.left = "100%";
    document.querySelector(".slide4-back").style.filter = "brightness(100%)";
    document.querySelector(".slide-left4").style.display = "block";
    document.querySelector(".slide-right4").style.display = "none";
  };
  const showFrontImg4 = () => {
    document.querySelector(".slide4-front").style.left = "10%";
    document.querySelector(".slide4-back").style.filter = "brightness(30%)";
    document.querySelector(".slide-left4").style.display = "none";
    document.querySelector(".slide-right4").style.display = "block";
  };
  const hideFrontImg5 = () => {
    document.querySelector(".slide5-front").style.left = "100%";
    document.querySelector(".slide5-back").style.filter = "brightness(100%)";
    document.querySelector(".slide-left5").style.display = "block";
    document.querySelector(".slide-right5").style.display = "none";
  };
  const showFrontImg5 = () => {
    document.querySelector(".slide5-front").style.left = "10%";
    document.querySelector(".slide5-back").style.filter = "brightness(30%)";
    document.querySelector(".slide-left5").style.display = "none";
    document.querySelector(".slide-right5").style.display = "block";
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
        <p>Naši Radovi:</p>
      </div>
      <div className="afterslide-container">
        <div className="afterslide-holder">
          <div className="slide-right" onClick={hideFrontImg}>
            {">>>"}
          </div>
          <div className="slide-left" onClick={showFrontImg}>
            {"<<<"}
          </div>
          <div className="slide-back"> </div>
          <div className="slide-front"> </div>
        </div>
        <div className="afterslide-text">
          <h1>Bezmetalna keramika</h1>
          <p>
            Bezmetalna keramika je vrsta materijala koja se koristi u
            stomatologiji za izradu bezmetalnih krunica, mostova i drugih vrsta
            proteza. Ona je izrađena od keramičke supstance koja je izuzetno
            tvrda i izdržljiva, što je čini idealnom za upotrebu u
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
            estetski prihvatljivije jer se ne vide na zubima kao što se metalne
            krunice vide.
          </p>
        </div>
        <div className="afterslide2-holder">
          <div className="slide-right2" onClick={hideFrontImg2}>
            {">>>"}
          </div>
          <div className="slide-left2" onClick={showFrontImg2}>
            {"<<<"}
          </div>
          <div className="slide2-back"></div>
          <div className="slide2-front"></div>
        </div>
      </div>

      <div className="afterslide3-container">
        <div className="afterslide3-holder">
          <div className="slide-right3" onClick={hideFrontImg3}>
            {">>>"}
          </div>
          <div className="slide-left3" onClick={showFrontImg3}>
            {"<<<"}
          </div>
          <div className="slide3-back"> </div>
          <div className="slide3-front"> </div>
        </div>
        <div className="afterslide3-text">
          <h1>Metalokeramčka krunica</h1>
          <p>
            Metalokeramička krunica je vrsta krunice koja se koristi u
            stomatologiji za popravku zuba. To je hirurški zahvat u kome se zub
            zamenjuje sa krunicom od metala i keramike. Metalokeramička krunica
            je čvrsta i otporna na opterećenja, što čini da je idealna za
            popravku zuba u najopterećenijim delovima vilice. Ona takođe izgleda
            estetski prihvatljivo.
          </p>
        </div>
      </div>

      <div className="afterslide4-container">
        <div className="afterslide4-text">
          <h1>Rekonstrukcija osmeha</h1>
          <p>
            Rekonstrukcija osmeha metalokeramičkim krunicama može dati odlične
            rezultate i pomoći osobi da vrati prirodni i lep izgled osmeha.
            Međutim, potrebno je voditi računa o pravilnoj oralnoj higijeni i
            redovnim posetama stomatologu kako bi se održao zdrav i lep osmeh.
          </p>
        </div>
        <div className="afterslide4-holder">
          <div className="slide-right4" onClick={hideFrontImg4}>
            {">>>"}
          </div>
          <div className="slide-left4" onClick={showFrontImg4}>
            {"<<<"}
          </div>
          <div className="slide4-back"></div>
          <div className="slide4-front"></div>
        </div>
      </div>

      <div className="afterslide5-container">
        <div className="afterslide5-holder">
          <div className="slide-right5" onClick={hideFrontImg5}>
            {">>>"}
          </div>
          <div className="slide-left5" onClick={showFrontImg5}>
            {"<<<"}
          </div>
          <div className="slide5-back"> </div>
          <div className="slide5-front"> </div>
        </div>
        <div className="afterslide5-text">
          <h1>Cirkonijum keramika</h1>
          <p>
            Cirkonijum keramika je vrsta keramike koja se koristi u
            stomatologiji za izradu različitih vrsta zubnih nadoknada.Cirkonijum
            keramika je odlična zbog svoje čvrstoće, otpornosti na habanje i
            estetskih kvaliteta. Ona je takođe otporna na promene temperature.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AfterSlide;
