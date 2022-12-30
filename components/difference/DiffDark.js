import React from "react";
import { useInView } from "react-intersection-observer";

function DiffDark() {
  const darkD = useInView({ triggerOnce: true });
  return (
    <div className="diffdark-container">
      <div className="diffdark-topimg"></div>
      <div className="diffdark-text">
        <p>
          "Ovde su svi veoma pažljivi prema vašim potrebama i brigama. Dr.
          Milica je izuzetno ljubazna i temeljna. Oprema u njihovoj
          ordinaciji je najsavremenija! Oni su zaista uložili
          velike napore kako bi osigurali da vam bude udobno i da budete zadovoljni svojom
          posetom. Toplo preporučujem dr. M.Milošević i njen tim u Milošević/Dental-u!"
          <span
            ref={darkD.ref}
            className={darkD.inView ? "span-Db" : "span-DB"}
          >
            <br></br>-Nikola V.
          </span>
        </p>
      </div>
      <div className="diffdark-botimg"></div>
    </div>
  );
}

export default DiffDark;
