import React from "react";

function SinusLift() {
  return (
    <>
      <div className="global-global">
        <div
          className="globalpage-container"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('/lift.webp')",
          }}
        >
          <div className="globalpage-text">
            <h1>Sinus Lift</h1>
          </div>
        </div>
        <div className="global-img"></div>
      </div>
      <div className="globalcontent-container">
        <h3>Sta je sinus lift?</h3>
        <p>
          Sinus lift ili sinus augmentacija je hirurški zahvat koji se izvodi
          kada se pacijentu želi ugraditi zubni implantat u prednjem dijelu
          gornje čeljusti, ali nema dovoljno kosti da bi se implantat ugradio.{" "}
        </p>
        <p>
          Cilj sinus lifta je dodati kost u ovu oblast tako da postane dovoljno
          debela da se ugradi zubni implantat. To se obično radi tako što se u
          kost učini mali rez, a zatim se podignu sinusna membrana i u područje
          između nje i kosti uvede kostani materijal. Ovaj materijal se može
          dobiti iz pacijentove vlastite kosti ili može biti sintetski
          materijal. Nakon što se kostani materijal uvede u područje, sinusna
          membrana se vrati na svoje mjesto i zatvori rez.
        </p>
        <h3>Metode sinus lifta</h3>
        <p>
          Postoje nekoliko različitih metoda za izvođenje sinus lifta, a koja će
          se metoda koristiti zavisi od individualnih potreba pacijenta i stanja
          njegove kosti
        </p>
        <p>
          Jedna od metoda je transalveolarna metoda, koja se koristi kada
          postoji dovoljno kosti u području gdje se implantat želi ugraditi, ali
          je sinus maksilaris previsoko. U ovom slučaju, hirurg čini rez kroz
          gornji dio zuba i kosti, a zatim podigne sinusnu membranu i uvede
          kostani materijal u područje između kosti i membrane.
        </p>
        <p>
          Druga metoda je transsinusalna metoda, koja se koristi kada nema
          dovoljno kosti u području gdje se implantat želi ugraditi i kada je
          sinus maksilaris previsoko. U ovom slučaju, hirurg čini rez kroz
          sinusnu membranu i uvede kostani materijal u sinus.
        </p>
        <p>
          Treća metoda je laterofacialna metoda, koja se koristi kada nema
          dovoljno kosti u području gdje se implantat želi ugraditi, a sinus
          maksilaris nije previsok.U ovom slučaju, hirurg čini rez iznad zuba i
          u područje između kosti i sinusne membrane, a zatim uvede kostani
          materijal u područje. Ova metoda se obično koristi kada se želi
          ugraditi više implantata u prednjem dijelu gornje čeljusti. Nakon što
          se kostani materijal uvede u područje, sinusna membrana se vrati na
          svoje mjesto i rez se zatvori.
        </p>
      </div>
    </>
  );
}

export default SinusLift;
