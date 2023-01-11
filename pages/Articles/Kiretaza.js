import React from "react";

function Kiretaza() {
  return (
    <>
      <div className="global-global">
        <div
          className="globalpage-container"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('/kiretaza.jpg')",
          }}
        >
          <div className="globalpage-text">
            <h1>Kiretaža</h1>
          </div>
        </div>
        <div className="global-img"></div>
      </div>
      <div className="globalcontent-container">
        <h3>Šta je kiretaža</h3>
        <p>
          Kiretaža je parodontološki postupak kojim se usklanjaju naslage koje
          su se godinama taložile ispod desni na zubu.Ove naslage mogu napraviti
          ogroman problem jer stvaraju kamenac. Zubni kamenac je odlično tlo za
          stvaranje bakterija koje uzrokuju upalu, gubitak koštane mase i,
          naravno, gubitak celog zuba.
        </p>
        <h3>Vrste kiretaže</h3>
        <p>Gingivalna kiretaža i kiretaža desni kojom se uklanja upaljeno vezivno tkivo bočno od parodontalnog džepa (prostor između zuba i kosti).</p>
        <p>Subgingivalna kiretaža kojom se uklanja tkivo parodontalnog džepa i tkiva koje je iznad njega, sve do alveolarne kosti.</p>
        <h3>Postupak kiretaže</h3>
        <p>Kiretaža zuba se izvodi u stomatološkoj ordinaciji pod lokalnom anestezijom ili opštom anestezijom u slučaju pacijenata koji imaju veći stepen nervoze ili strah od stomatoloških postupaka.</p>
        <p>U postupku kiretaže zuba, stomatolog koristi alat zvan kiretaza koji je izrađen od čelika, sa spiralnom iglom na jednom kraju. Stomatolog će prvo koristiti ultrazvučni aparat za uklanjanje većeg dela kamenca sa zuba. Zatim će koristiti kiretazu da ukloni ostatak kamenca i plaka iz praznine između zuba i desni.</p>
        <p>Kiretaža zuba može dovesti do krvarenja desni poslije postupka, ali to će se smanjiti ako se pridržavate preporuka stomatologa za oralnu higijenu i posjetite stomatologa na redovne preglede.</p>
      </div>
    </>
  );
}

export default Kiretaza;
